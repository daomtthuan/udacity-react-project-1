import { PropsWithClassName } from '~types/component/ui.type';
import { BookShelf } from '~types/model/shelf.type';

export type ShelfProp = PropsWithClassName<{
  data: BookShelf;
}>;
