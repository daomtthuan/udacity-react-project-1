import Shelves from '~components/feature/shelves';

export default function HomePage() {
  return (
    <>
      <h2 className="text-primary fw-bold mb-4">My Reads</h2>

      <div className="d-flex flex-column gap-4">
        <Shelves />
      </div>
    </>
  );
}
