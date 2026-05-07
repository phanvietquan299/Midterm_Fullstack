import { useMemo } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const returnQuery = searchParams.toString();
  const backToList = returnQuery ? `/products?${returnQuery}` : '/products';

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
            <p className="eyebrow">Route params</p>
            <h2>{product.name}</h2>
          </div>
          <span className="pill">/products/{id}</span>
        </div>

        <p className="lead">Category: {product.category}</p>
        <p>{product.summary}</p>

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
