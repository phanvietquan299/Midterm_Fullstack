import { useMemo } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { products } from '../data/products';

function formatQueryValue(key, value) {
  if (key === 'category') {
    return `Category: ${value}`;
  }

  if (key === 'sort') {
    return `Sort: ${value.replace('_', ' ')}`;
  }

  return `${key}: ${value}`;
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const returnQuery = searchParams.toString();
  const backToList = returnQuery ? `/products?${returnQuery}` : '/products';
  const queryEntries = Array.from(searchParams.entries());

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        description="The selected id does not match any item in the sample data."
      />
    );
  }

  return (
    <section className="detail-card">
      <div className={`detail-visual tone-${product.tone}`}>
        <span>{product.icon}</span>
        <div className="detail-visual-card">
          <span className="pill">{product.category}</span>
          <strong>${product.price.toLocaleString()}</strong>
        </div>
      </div>

      <div className="content-stack">
        <div className="section-header">
          <div>
            <p className="eyebrow">Chi tiết</p>
            <h2>{product.name}</h2>
          </div>
          <span className="pill">/products/{id}</span>
        </div>

        <p className="lead">
          Danh mục: {product.category}. Trang này lấy mã từ URL và giữ lại bộ lọc hiện tại.
        </p>
        <p>{product.summary}</p>

        <div className="detail-specs">
          <div className="spec-card">
            <span className="muted">Product ID</span>
            <strong>{product.id}</strong>
          </div>
          <div className="spec-card">
            <span className="muted">Category</span>
            <strong>{product.category}</strong>
          </div>
          <div className="spec-card">
            <span className="muted">Price</span>
            <strong>${product.price.toLocaleString()}</strong>
          </div>
        </div>

        {queryEntries.length > 0 ? (
          <div className="query-state">
            <div className="section-header">
              <div>
                <p className="eyebrow">Bộ lọc</p>
                <h3>Giữ trạng thái trên URL</h3>
              </div>
            </div>

            <div className="query-state-list">
              {queryEntries.map(([key, value]) => (
                <span key={key} className="pill">
                  {formatQueryValue(key, value)}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="detail-actions">
          <button className="button button-primary" onClick={() => navigate(-1)}>
            Quay lại
          </button>
          <Link className="button button-secondary" to={backToList}>
            Về danh sách
          </Link>
        </div>
      </div>
    </section>
  );
}
