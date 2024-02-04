import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';

import { useDebounceValue, useUpdateEffect } from 'usehooks-ts';
import { useLayoutEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import bookApi from '~services/api/book';
import shelfApi from '~services/api/shelf';
import Book from '~types/model/book.type';
import Shelf from '~types/model/shelf.type';

const MAX_RESULTS = 50;

export default function useSearch() {
  const loading = useLoading();

  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
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

        const [shelves] = await Promise.all([shelfApi.list()]);

        setShelves(() => shelves);
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
          const books = await bookApi.search({
            query,
            maxResults: MAX_RESULTS,
          });

          setBooks(() => books ?? []);
          setIsEmpty(() => !books);
        } finally {
          loading.hide();
        }
      } else {
        setBooks(() => []);
        setIsEmpty(() => false);
      }
    })();
  }, [query, loading]);

  return useMemo(
    () => ({
      states: {
        shelves,
        books,
        isEmpty,
      },
      events: {
        onChangeSearch,
      },
    }),
    [books, isEmpty, onChangeSearch, shelves],
  );
}
