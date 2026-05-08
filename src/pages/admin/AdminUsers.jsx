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
    role: 'Designer'
  }
];

export default function AdminUsers() {
  const activeUsers = users.filter((user) => user.status === 'active').length;
  const inactiveUsers = users.length - activeUsers;

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Người dùng</p>
          <h1>Danh sách người dùng</h1>
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