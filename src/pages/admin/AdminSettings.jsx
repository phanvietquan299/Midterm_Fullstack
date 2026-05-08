import { useNavigate } from 'react-router-dom';

const qaChecks = [
  'Open /admin and confirm the dashboard renders inside AdminLayout.',
  'Open /admin/users and confirm the sidebar stays visible.',
  'Open /admin/settings directly after refresh and confirm the route still works.',
  'Use the browser back button and confirm history navigation behaves correctly.',
  'Check that active admin links update when routes change.'
];

export default function AdminSettings() {
  const navigate = useNavigate();

  return (
    <div className="content-stack">
      <p className="eyebrow">Nested routes</p>
      <h2>Admin Settings</h2>
      <p className="lead">
        Use this page to demonstrate browser history, push navigation, replace
        navigation, and final QA checks for the admin routes.
      </p>

      <div className="product-grid">
        <article className="product-card">
          <div className="product-body">
            <span className="pill">Push</span>
            <h3>navigate('/admin/users')</h3>
            <p>
              Push adds a new entry to the browser history, so the user can go
              back to this settings page.
            </p>
            <button className="button button-primary" onClick={() => navigate('/admin/users')}>
              Push to users
            </button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-body">
            <span className="pill">Replace</span>
            <h3>navigate('/admin/users', &#123; replace: true &#125;)</h3>
            <p>
              Replace changes the current history entry, so this settings page
              is not kept as the previous page.
            </p>
            <button
              className="button button-secondary"
              onClick={() => navigate('/admin/users', { replace: true })}
            >
              Replace with users
            </button>
          </div>
        </article>
      </div>

      <article className="product-card">
        <div className="product-body">
          <span className="pill">Back button</span>
          <h3>navigate(-1)</h3>
          <p>
            This follows the browser history stack and returns to the previous
            page when one exists.
          </p>
          <button className="button button-primary" onClick={() => navigate(-1)}>
            Back with history
          </button>
        </div>
      </article>

      <article className="product-card">
        <div className="product-body">
          <span className="pill">QA</span>
          <h3>Routing checklist</h3>
          <ul className="feature-list">
            {qaChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
