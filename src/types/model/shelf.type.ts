import { Book } from './book.type';

export type Shelf = {
  id: string;
  displayName: string;
};

export type BookShelf = Shelf & {
  books: Book[];
};
