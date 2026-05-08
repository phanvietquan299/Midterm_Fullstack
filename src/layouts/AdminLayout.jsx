import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const links = [
  {
    to: '/admin',
    label: 'Dashboard',
    end: true
  },
  {
    to: '/admin/users',
    label: 'Users'
  },
  {
    to: '/admin/settings',
    label: 'Settings'
  }
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-top">
          <div className="admin-logo">
            <div className="admin-logo-icon">R</div>

            <div>
              <p className="eyebrow">Admin Panel</p>
              <h1>Routing Dashboard</h1>
            </div>
          </div>

          <p className="admin-description">
            Nested routes demonstration using React Router Outlet,
            programmatic navigation and browser history.
          </p>
        </div>

        <nav className="admin-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `admin-link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-actions">
          <button
            className="button button-primary"
            onClick={() => navigate('/')}
          >
            Back To Home
          </button>

          <button
            className="button button-secondary"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        <div className="admin-route-box">
          <span>Current Route</span>
          <strong>{location.pathname}</strong>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-main-header">
          <div>
            <p className="eyebrow">Nested Routing</p>
            <h2>Admin Workspace</h2>
          </div>

          <div className="admin-status">
            <span></span>
            System Online
          </div>
        </div>

        <div className="admin-content-card">
          <Outlet />
        </div>
      </main>
    </div>
  );
}