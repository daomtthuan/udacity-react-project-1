import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';

import { useDebounceValue, useUpdateEffect } from 'usehooks-ts';
import { useLayoutEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import bookApi from '~services/api/book';
import shelfApi from '~services/api/shelf';
import Book from '~types/model/book.type';
import Shelf from '~types/model/shelf.type';

export default function useSearch() {
  const loading = useLoading();

  const [books, setBooks] = useState<Book[]>([]);
  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const [query, setQuery] = useDebounceValue<string>('', 500);

  const onChangeSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setQuery(event.target.value);
    },
    [setQuery],
  );

  useLayoutEffectOnce(() => {
    (async () => {
      try {
        loading.show();

        const [shelves, books] = await Promise.all([shelfApi.list(), bookApi.list()]);
        setShelves(() => shelves);
        setBooks(() => books);
      } finally {
        loading.hide();
      }
    })();
  });

  useUpdateEffect(() => {
    (async () => {
      if (query) {
        try {
          loading.show();
          const searchedBooks = await bookApi.search(query);

          setSearchedBooks(() =>
            (searchedBooks ?? []).map((searchedBook) => {
              const book = books.find((book) => searchedBook.id === book.id);
              if (book) {
                return book;
              }

              return searchedBook;
            }),
          );
          setIsEmpty(() => !searchedBooks);
        } finally {
          loading.hide();
        }
      } else {
        setSearchedBooks(() => []);
        setIsEmpty(() => false);
      }
    })();
  }, [query, loading]);

  return useMemo(
    () => ({
      states: {
        shelves,
        searchedBooks,
        isEmpty,
      },
      events: {
        onChangeSearch,
      },
    }),
    [searchedBooks, isEmpty, onChangeSearch, shelves],
  );
}
