import { users } from '../../data/users';

export default function AdminUsers() {
  const activeUsers = users.filter((user) => user.status === 'active').length;
  const inactiveUsers = users.length - activeUsers;

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Người dùng</p>
          <h1>Danh sách người dùng</h1>
          <p className="lead">Bảng người dùng được làm thành các thẻ để nhìn hiện đại hơn trên mobile.</p>
        </div>

        <span className="pill">/admin/users</span>
      </div>

      <div className="stats-row admin-stats-row">
        <div className="stat-box">
          <h3>{users.length}</h3>
          <p>Total users</p>
        </div>
        <div className="stat-box">
          <h3>{activeUsers}</h3>
          <p>Active</p>
        </div>
        <div className="stat-box">
          <h3>{inactiveUsers}</h3>
          <p>Inactive</p>
        </div>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <article key={user.id} className="user-card">
            <div className="user-avatar">{user.name.charAt(0)}</div>

            <div className="user-copy">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p className="muted">
                {user.role} · {user.status}
              </p>
            </div>

            <span className="pill pill-soft">Joined {user.joinedAt}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
