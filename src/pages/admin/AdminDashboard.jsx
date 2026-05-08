import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { users } from '../../data/users';

export default function AdminDashboard() {
  const activeUsers = users.filter((user) => user.status === 'active').length;
  const inactiveUsers = users.length - activeUsers;
  const totalInventoryValue = products.reduce((total, product) => total + product.price, 0);

  return (
    <div className="content-stack">
      <p className="eyebrow">Nested routes</p>
      <h2>Admin Dashboard</h2>
      <p className="lead">
        This page is rendered through AdminLayout and acts as the default admin route.
      </p>

      <div className="product-grid">
        <article className="product-card">
          <div className="product-body">
            <span className="pill">Users</span>
            <h3>{users.length} accounts</h3>
            <p>{activeUsers} active users and {inactiveUsers} inactive users.</p>
            <Link className="card-link" to="/admin/users">
              Manage users
            </Link>
          </div>
        </article>

        <article className="product-card">
          <div className="product-body">
            <span className="pill">Products</span>
            <h3>{products.length} products</h3>
            <p>Total sample inventory value is ${totalInventoryValue.toLocaleString()}.</p>
            <Link className="card-link" to="/products">
              View products
            </Link>
          </div>
        </article>
      </div>

      <article className="product-card">
        <div className="product-body">
          <span className="pill">Settings</span>
          <h3>Routing checks</h3>
          <p>
            Use the settings page to explain push vs replace history, back navigation,
            and final QA notes for the admin routes.
          </p>
          <Link className="card-link" to="/admin/settings">
            Open settings
          </Link>
        </div>
      </article>
    </div>
  );
}
