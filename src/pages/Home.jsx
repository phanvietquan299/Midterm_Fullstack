import { Link } from 'react-router-dom';

const highlights = [
  'SPA routing with BrowserRouter',
  'Route params and query string',
  'Nested routes and browser history'
];

export default function Home() {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Member 1 starter</p>
        <h2>Build routing flows with a clean demo-ready layout.</h2>
        <p className="lead">
          This skeleton gives each teammate a clear surface to implement React Router,
          params, query state, nested routes, and QA work without stepping on each other.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/products">
            Open products
          </Link>
          <Link className="button button-secondary" to="/admin">
            Open admin
          </Link>
        </div>
      </div>

      <div className="feature-panel">
        <h3>What is ready now</h3>
        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
