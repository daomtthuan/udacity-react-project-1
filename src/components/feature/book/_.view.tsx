import classNames from 'classnames';

import styles from './_.module.scss';
import { BookProps } from './_.type';

export default function Book({ data, className }: BookProps) {
  return (
    <div className={classNames('card', styles.container, className)}>
      <div className="card-header text-center">
        <img src={data.imageLinks.smallThumbnail} className={classNames(styles.image, 'rounded')} alt={data.title} />
      </div>

      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <div className="card-text text-secondary">{data.authors.join(', ')}</div>
      </div>

      <div className="card-footer text-end">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
