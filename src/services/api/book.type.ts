import { Except } from 'type-fest';
import BookShelves from '~types/model/book-shelf.type';
import Book from '~types/model/book.type';

export type BookApiListResponse = {
  books: Book[];
};

export type BookApiGetResponse = {
  book: Book;
};

export type BookApiUpdateRequest = Pick<Book, 'id'> & Partial<Except<Book, 'id'>>;

export type BookApiUpdateResponse = BookShelves;

export type BookApiSearchRequest = {
  query: string;
  maxResults: number;
};

export type BookApiSearchResponse =
  | {
      books: Book[];
    }
  | {
      books: {
        error: string;
        items: [];
      };
    };
