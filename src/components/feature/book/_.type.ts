import { Dispatch, SetStateAction } from 'react';

import { EmptyObject } from 'type-fest';
import { PropsWithClassName } from '~types/component/ui.type';
import BookShelves from '~types/model/book-shelf.type';
import Book from '~types/model/book.type';
import Shelf from '~types/model/shelf.type';

export type BookMovableProps = {
  setBookShelves: Dispatch<SetStateAction<BookShelves>>;
  setBooks: Dispatch<SetStateAction<Book[]>>;
};

export type BookAddableProps = EmptyObject;

export type BookProps = PropsWithClassName<
  {
    data: Book;
    shelves: Shelf[];
  } & (BookAddableProps | BookMovableProps)
>;
