import { PropsWithClassName } from '~types/component/ui.type';
import { Book } from '~types/model/book.type';

export type BookProps = PropsWithClassName<{
  data: Book;
}>;
