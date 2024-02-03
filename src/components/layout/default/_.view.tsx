import { Link, NavLink, Outlet } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DefaultLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary bg-opacity-25 shadow sticky-top">
        <div className="container-fluid px-5">
          <h1 className="navbar-brand text-primary fw-bold mb-0">
            <Link className="text-decoration-none" to="/">
              Book Tracking
            </Link>
          </h1>

          <button
            className="btn btn-primary text-light d-sm-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse mt-1 text-end" id="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid px-5 py-4">
        <Outlet />
      </div>
    </>
  );
}
