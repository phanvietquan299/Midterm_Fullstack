import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/admin', label: 'Admin' }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="brand-mark">N</span>
        <div>
          <h1>Northstar Commerce</h1>
        </div>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
