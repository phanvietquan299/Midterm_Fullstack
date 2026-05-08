import { NavLink, Outlet } from 'react-router-dom';

const adminLinks = [
  { to: '/', label: 'Home' },
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/settings', label: 'Settings' },
];

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div>
          <p className="eyebrow">Nested Routes</p>
          <h1>Admin Area</h1>
          <p className="muted">This section is reserved for Outlet-based pages.</p>
        </div>

        <nav className="admin-nav">

          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `admin-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="admin-content">
        <Outlet />
      </section>
    </div>
  );
}
