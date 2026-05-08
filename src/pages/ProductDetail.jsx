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
      </div>

      <div className="content-stack">
        <div className="section-header">
          <div>
            <h2>{product.name}</h2>
          </div>
          <span className="pill">/products/{id}</span>
        </div>

        <p className="lead">Category: {product.category}</p>
        <p>{product.summary}</p>

        {queryEntries.length > 0 ? (
          <div className="query-state">
            <div className="section-header">
              <div>
                <p className="eyebrow">Query string state</p>
                <h3>URL keeps filter and sort</h3>
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
            Back with history
          </button>
          <Link className="button button-secondary" to={backToList}>
            Back to filtered list
          </Link>
        </div>
      </div>
    </section>
  );
}
