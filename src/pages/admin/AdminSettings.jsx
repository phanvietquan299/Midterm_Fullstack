export default function AdminSettings() {
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