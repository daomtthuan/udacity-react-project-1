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
      const bookId = book.id;

      if ('setBookShelves' in props && 'setBooks' in props) {
        const { setBookShelves, setBooks } = props;

        return (event) => {
          event.preventDefault();

          (async () => {
            try {
              loading.show();

              const bookShelves = await bookApi.update({
                id: bookId,
                shelf: shelfId,
              });

              const book = await bookApi.get(bookId);

              setBookShelves(() => bookShelves);
              setBooks((prev) => {
                const index = prev.findIndex((book) => book.id === bookId);
                if (index >= 0) {
                  prev[index] = book;
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
    [book.id, loading, props],
  );

  const onClickAddTo = useCallback<(id: string) => MouseEventHandler<HTMLAnchorElement> | undefined>(
    (shelfId) => {
      const bookId = book.id;

      if ('setBookShelves' in props && 'setBooks' in props) {
        return undefined;
      }

      return (event) => {
        event.preventDefault();

        (async () => {
          try {
            loading.show();

            await bookApi.update({
              id: bookId,
              shelf: shelfId,
            });

            const book = await bookApi.get(bookId);

            setBook(() => book);
          } finally {
            loading.hide();
          }
        })();
      };
    },
    [book.id, loading, props],
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
