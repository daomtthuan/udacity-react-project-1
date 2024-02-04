import { useMemo, useState } from 'react';

import { useLayoutEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import bookApi from '~services/api/book';
import shelfApi from '~services/api/shelf';
import BookShelves from '~types/model/book-shelf.type';
import Book from '~types/model/book.type';
import Shelf from '~types/model/shelf.type';

import { BookProps } from '../book';
import { ShelfProp } from '../shelf';

export default function useShelves() {
  const loading = useLoading();

  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [bookShelves, setBookShelves] = useState<BookShelves>({});

  const shelfPropsList = useMemo<ShelfProp[]>(() => {
    const result: ShelfProp[] = [];
    Object.entries(bookShelves).forEach(([shelfId, bookIds]) => {
      const shelf = shelves.find((shelf) => shelf.id === shelfId);
      if (!shelf) {
        return;
      }

      result.push({
        data: shelf,
        bookPropsList: books
          .filter((book) => bookIds.includes(book.id))
          .map<BookProps>((book) => ({
            data: book,
            shelves,
            setBookShelves,
            setBooks,
          })),
      });
    });

    return result;
  }, [bookShelves, books, shelves]);

  useLayoutEffectOnce(() => {
    (async () => {
      try {
        loading.show();

        const [shelves, books] = await Promise.all([shelfApi.list(), bookApi.list()]);
        setShelves(() => shelves);
        setBooks(() => books);

        setBookShelves(() =>
          shelves.reduce(
            (prev: BookShelves, shelf: Shelf) => ({
              ...prev,
              [shelf.id]: books.filter((book) => book.shelf === shelf.id).map((book) => book.id),
            }),
            {},
          ),
        );
      } finally {
        loading.hide();
      }
    })();
  });

  return useMemo(
    () => ({
      states: {
        shelfPropsList,
      },
    }),
    [shelfPropsList],
  );
}
