import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import useLoading from '~hooks/loading';
import bookApi from '~services/api/book';
import Book from '~types/model/book.type';

import { BookProps } from './_.type';

export default function useBook({ data, ...props }: BookProps) {
  const loading = useLoading();

  const [book, setBook] = useState<Book>(data);

  const isMoveMode = useMemo<boolean>(() => 'setBookShelves' in props && 'setBooks' in props, [props]);

  const onClickMoveTo = useCallback<(id: string) => MouseEventHandler<HTMLAnchorElement> | undefined>(
    (shelfId) => {
      if (shelfId === book.shelf) {
        return undefined;
      }

      if ('setBookShelves' in props && 'setBooks' in props) {
        const { setBookShelves, setBooks } = props;

        return (event) => {
          event.preventDefault();

          (async () => {
            try {
              loading.show();

              const bookShelves = await bookApi.update({
                id: book.id,
                shelf: shelfId,
              });

              const updatedBook = await bookApi.get(book.id);

              setBookShelves(() => bookShelves);
              setBooks((prev) => {
                const index = prev.findIndex((book) => book.id === updatedBook.id);
                if (index >= 0) {
                  prev[index] = updatedBook;
                }

                return prev;
              });
            } finally {
              loading.hide();
            }
          })();
        };
      }

      return undefined;
    },
    [book.id, book.shelf, loading, props],
  );

  const onClickAddTo = useCallback<(id: string) => MouseEventHandler<HTMLAnchorElement> | undefined>(
    (shelfId) => {
      if (shelfId === book.shelf) {
        return undefined;
      }

      if ('setBookShelves' in props && 'setBooks' in props) {
        return undefined;
      }

      return (event) => {
        event.preventDefault();

        (async () => {
          try {
            loading.show();

            await bookApi.update({
              id: book.id,
              shelf: shelfId,
            });

            const updatedBook = await bookApi.get(book.id);

            setBook(() => updatedBook);
          } finally {
            loading.hide();
          }
        })();
      };
    },
    [book.id, book.shelf, loading, props],
  );

  return useMemo(
    () => ({
      states: {
        isMoveMode,
        book,
      },
      events: {
        onClickMoveTo,
        onClickAddTo,
      },
    }),
    [book, isMoveMode, onClickAddTo, onClickMoveTo],
  );
}
