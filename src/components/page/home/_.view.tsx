import Shelves from '~components/feature/shelves';

export default function HomePage() {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="page-title container-fluid px-sm-5 py-3 bg-white position-sticky shadow-sm border-bottom">
        <div className="d-flex align-item-center">
          <h2 className="text-primary fw-bold">My Reads</h2>
        </div>
      </div>

      <div className="container-fluid px-sm-5 pb-4">
        <Shelves />
      </div>
    </div>
  );
}
