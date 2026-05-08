import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-card">
        <span className="notfound-code">404</span>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for does not exist or has been moved
          to another route.
        </p>

        <div className="notfound-actions">
          <Link className="button button-primary" to="/">
            Back Home
          </Link>

          <Link className="button button-secondary" to="/products">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}