import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Book from '../book';
import useSearch from './_.hook';
import { SearchProps } from './_.type';

export default function Search({ className }: SearchProps) {
  const { states, events } = useSearch();

  return (
    <div className={classNames('d-flex flex-column gap-3', className)}>
      <div
        className={classNames('page-title container-fluid px-sm-5 py-3 pb-4 bg-white position-sticky shadow-sm', {
          'border-bottom': states.searchedBooks.length,
        })}>
        <div className="d-flex align-item-center">
          <Link className="btn btn-link" to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <label className="h2 text-primary fw-bold form-label" htmlFor="input-search">
            Search
          </label>
        </div>

        <input type="search" className="form-control" id="input-search" placeholder="Search by title, author, or ISBN..." onChange={events.onChangeSearch} />
      </div>

      <div className="container-fluid px-sm-5 pb-4">
        <div className="d-flex flex-wrap gap-5 gap-3 py-3">
          {states.isEmpty ? (
            <div className="flex-fill text-center">Not Found</div>
          ) : (
            states.searchedBooks.map((book) => <Book key={book.id} data={book} shelves={states.shelves} />)
          )}
        </div>
      </div>
    </div>
  );
}
