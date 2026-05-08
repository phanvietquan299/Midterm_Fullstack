import { Link } from 'react-router-dom';

const features = [
  {
    title: 'SPA Routing',
    description:
      'Navigate between pages without full page refresh using BrowserRouter and Routes.'
  },
  {
    title: 'Dynamic Params',
    description:
      'Access route parameters like /products/:id using useParams().'
  },
  {
    title: 'Query String State',
    description:
      'Persist filtering and sorting state directly inside the URL.'
  },
  {
    title: 'Nested Routes',
    description:
      'Use Outlet and layout routing for scalable application structure.'
  }
];

const routeCards = [
  {
    route: '/',
    title: 'Home Route',
    desc: 'Landing page with navigation overview.'
  },
  {
    route: '/products',
    title: 'Products Route',
    desc: 'Filtering, sorting and query string demo.'
  },
  {
    route: '/products/:id',
    title: 'Dynamic Detail Route',
    desc: 'Product detail using route params.'
  },
  {
    route: '/admin',
    title: 'Admin Dashboard',
    desc: 'Nested routing with Outlet rendering.'
  }
];

const stats = [
  {
    value: '8+',
    label: 'Routes Configured'
  },
  {
    value: 'SPA',
    label: 'Navigation System'
  },
  {
    value: '100%',
    label: 'Responsive Design'
  },
  {
    value: 'React',
    label: 'Modern Frontend'
  }
];

export default function Home() {
  return (
    <div className="home-layout">
      <section className="hero-section">
        <div className="hero-left">
          <p className="eyebrow">React Router Midterm Project</p>

          <h1>
            Professional React Router Navigation Experience.
          </h1>

          <p className="hero-description">
            This project demonstrates SPA routing, dynamic route parameters,
            query string management, nested routes, and browser history handling
            inside a modern React application.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/products">
              Explore Products
            </Link>

            <Link className="button button-secondary" to="/admin">
              Open Dashboard
            </Link>
          </div>

          <div className="stats-row">
            {stats.map((item) => (
              <div key={item.label} className="stat-box">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="preview-window">
            <div className="preview-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-body">
              <div className="preview-sidebar">
                <div className="sidebar-item active">Home</div>
                <div className="sidebar-item">Products</div>
                <div className="sidebar-item">Admin</div>
                <div className="sidebar-item">Settings</div>
              </div>

              <div className="preview-content">
                <div className="preview-card large"></div>

                <div className="preview-grid">
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core Technologies</p>
            <h2>Routing Features</h2>
          </div>

          <p>
            The application demonstrates multiple React Router concepts
            inside one complete navigation system.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon"></div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routes-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Application Architecture</p>
            <h2>Route Overview</h2>
          </div>

          <p>
            Main routing paths configured inside the React Router application.
          </p>
        </div>

        <div className="routes-grid">
          {routeCards.map((item) => (
            <article key={item.route} className="route-card">
              <span className="route-badge">{item.route}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}