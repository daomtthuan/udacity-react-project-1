import { PropsWithClassName } from '~types/component/ui.type';
import Shelf from '~types/model/shelf.type';

import { BookProps } from '../book';

export type ShelfProp = PropsWithClassName<{
  data: Shelf;

  bookPropsList: BookProps[];
}>;
