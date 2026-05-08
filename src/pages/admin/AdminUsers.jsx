import { users } from '../../data/users';

export default function AdminUsers() {
  const activeUsers = users.filter((user) => user.status === 'active').length;
  const inactiveUsers = users.length - activeUsers;

  return (
    <div className="content-stack">
      <p className="eyebrow">Nested routes</p>
      <h2>Admin Users</h2>
      <p className="lead">
        This page is rendered inside AdminLayout through Outlet and shows sample
        user data for the admin route.
      </p>

      <div className="product-grid">
        <article className="product-card">
          <div className="product-body">
            <span className="pill">Total users</span>
            <h3>{users.length} accounts</h3>
            <p>All sample users managed by the admin area.</p>
          </div>
        </article>

        <article className="product-card">
          <div className="product-body">
            <span className="pill">Status</span>
            <h3>{activeUsers} active</h3>
            <p>{inactiveUsers} inactive accounts are included in the sample data.</p>
          </div>
        </article>
      </div>

      <div className="product-grid">
        {users.map((user) => (
          <article className="product-card" key={user.id}>
            <div className="product-body">
              <div className="product-meta">
                <span className="pill">{user.role}</span>
                <strong>{user.status}</strong>
              </div>

              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p className="muted">Joined: {user.joinedAt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
