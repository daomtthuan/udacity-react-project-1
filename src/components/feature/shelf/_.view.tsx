import classNames from 'classnames';

import Book from '../book';
import { ShelfProp } from './_.type';

export default function Shelf({ data, bookPropsList, className }: ShelfProp) {
  return (
    <div className={classNames('d-flex flex-column gap-3', className)}>
      <h3 className="mb-0">{data.displayName}</h3>
      <div className="d-flex flex-wrap gap-5 border-top py-3 shadow-inset">
        {bookPropsList.map((bookProps) => (
          <Book key={bookProps.data.id} {...bookProps} />
        ))}
      </div>
    </div>
  );
}
