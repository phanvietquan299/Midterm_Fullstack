import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Route Management',
    description:
      'Manage nested routes and layout rendering with React Router.'
  },
  {
    title: 'Browser History',
    description:
      'Demonstrate navigate(), back navigation and replace history.'
  },
  {
    title: 'Query String',
    description:
      'Persist filtering and sorting state inside the URL.'
  }
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <section className="admin-hero">
        <div>
          <p className="eyebrow">Admin Dashboard</p>

          <h1>Nested Routing Workspace</h1>

          <p>
            This section demonstrates nested routes using Outlet and
            programmatic navigation using useNavigate().
          </p>
        </div>

        <div className="admin-hero-actions">
          <button
            className="button button-primary"
            onClick={() => navigate('/admin/users')}
          >
            Open Users
          </button>

          <button
            className="button button-secondary"
            onClick={() => navigate('/admin/settings')}
          >
            Open Settings
          </button>
        </div>
      </section>

      <section className="admin-card-grid">
        {cards.map((card) => (
          <article key={card.title} className="admin-info-card">
            <div className="admin-card-icon"></div>

            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}