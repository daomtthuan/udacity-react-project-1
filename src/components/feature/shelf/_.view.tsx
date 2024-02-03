import classNames from 'classnames';

import Book from '../book';
import { ShelfProp } from './_.type';

export default function Shelf({ data, className }: ShelfProp) {
  return (
    <div className={classNames(className)}>
      <h3>{data.displayName}</h3>
      <hr />
      <div className="d-flex gap-3">
        {data.books.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </div>
    </div>
  );
}
