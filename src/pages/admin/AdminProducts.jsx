import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

export default function AdminProducts() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Trang con</p>
          <h1>Sản phẩm quản trị</h1>
          <p className="lead">
            Danh sách sản phẩm trong khu quản trị.
          </p>
        </div>

        <span className="pill">/admin/products</span>
      </div>

      <div className="admin-products-panel">
        <div className="admin-products-actions">
          <button className="button button-primary" onClick={() => navigate('/products')}>
            Sang trang sản phẩm
          </button>

          <button className="button button-secondary" onClick={() => navigate(-1)}>
            Quay lại
          </button>
        </div>

        <div className="admin-products-grid">
          {products.map((product) => (
            <article key={product.id} className="admin-product-card">
              <span className={`admin-product-icon tone-${product.tone}`}>{product.icon}</span>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <strong>${product.price.toLocaleString()}</strong>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}