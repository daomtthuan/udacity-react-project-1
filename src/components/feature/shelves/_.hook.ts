import { useMemo, useState } from 'react';

import { useLayoutEffectOnce } from '~hooks/effect';
import bookApi from '~services/api/book';
import shelfApi from '~services/api/shelf';
import { BookShelf } from '~types/model/shelf.type';

export default function useShelves() {
  const [bookShelves, setBookShelves] = useState<BookShelf[]>([]);

  useLayoutEffectOnce(() => {
    (async () => {
      const shelves = shelfApi.list();
      const books = await bookApi.list();

      setBookShelves(() =>
        shelves.map<BookShelf>((shelf) => ({
          ...shelf,
          books: books.filter((book) => shelf.id === book.shelf),
        })),
      );
    })();
  });

  return useMemo(
    () => ({
      states: {
        bookShelves,
      },
    }),
    [bookShelves],
  );
}
