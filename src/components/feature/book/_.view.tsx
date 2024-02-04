import classNames from 'classnames';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useBook from './_.hook';
import styles from './_.module.scss';
import { BookProps } from './_.type';

export default function Book(props: BookProps) {
  const { shelves, className } = props;

  const { states, events } = useBook(props);

  return (
    <div className={classNames(styles.container, 'd-flex flex-column gap-3', className)}>
      <div className="text-center position-relative">
        <img className={classNames(styles.image, 'rounded shadow')} src={states.book.imageLinks.thumbnail} alt={states.book.title} />

        <div className="dropdown position-absolute end-0 bottom-0">
          <button
            className={classNames(styles.dropdown, 'btn btn-primary text-light rounded-circle shadow')}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end mt-1">
            {states.isMoveMode ? (
              <>
                <li>
                  <h6 className="dropdown-header text-secondary">Move to...</h6>
                </li>
                {shelves.map(({ id, displayName }) => (
                  <li key={id}>
                    <a
                      className={classNames('dropdown-item', {
                        active: states.book.shelf === id,
                      })}
                      href={`#${id}`}
                      onClick={events.onClickMoveTo(id)}>
                      {displayName}
                    </a>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href={`#none`} onClick={events.onClickMoveTo('none')}>
                    None
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <h6 className="dropdown-header text-secondary">Add to...</h6>
                </li>
                {shelves.map(({ id, displayName }) => (
                  <li key={id}>
                    <a
                      className={classNames('dropdown-item', {
                        active: states.book.shelf === id,
                      })}
                      href={`#${id}`}
                      onClick={events.onClickAddTo(id)}>
                      {displayName}
                    </a>
                  </li>
                ))}
                {states.book.shelf && states.book.shelf !== 'none' && (
                  <>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={`#none`} onClick={events.onClickAddTo('none')}>
                        None
                      </a>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="text-wrap mt-1">
        <div className="fw-semibold">{states.book.title}</div>
        <div className="text-secondary fs-7">{states.book.authors?.join(', ')}</div>
      </div>
    </div>
  );
}
