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
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Programmatic Navigation</p>
          <h1>System Settings</h1>
        </div>

        <span className="pill">/admin/settings</span>
      </div>

      <div className="settings-grid">
        <article className="settings-card">
          <h3>Route Protection</h3>
          <p>
            Example concept of route guards and protected routes
            in React Router applications.
          </p>
        </article>

        <article className="settings-card">
          <h3>History Replace</h3>
          <p>
            Demonstration of replace navigation and history stack control.
          </p>
        </article>

        <article className="settings-card">
          <h3>Responsive Layout</h3>
          <p>
            Responsive nested layout supporting desktop and mobile screens.
          </p>
        </article>
      </div>
    </div>
  );
}