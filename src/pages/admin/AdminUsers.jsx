const users = [
  {
    name: 'Alex Johnson',
    role: 'Administrator'
  },
  {
    name: 'Sarah Parker',
    role: 'Product Manager'
  },
  {
    name: 'Michael Lee',
    role: 'Frontend Developer'
  }
];

export default function AdminUsers() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Nested Route</p>
          <h1>Users Management</h1>
        </div>

        <span className="pill">/admin/users</span>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <article key={user.name} className="user-card">
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>

            <div>
              <h3>{user.name}</h3>
              <p>{user.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}