import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="empty-state page-not-found">
      <p className="eyebrow">404</p>
      <h2>Page not found</h2>
      <p>The route is not part of the current midterm skeleton.</p>
      <Link className="button button-primary" to="/">
        Go home
      </Link>
    </section>
  );
}
