import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className={`product-visual tone-${product.tone}`}>
        <span>{product.icon}</span>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span className="pill">{product.category}</span>
          <strong>${product.price.toLocaleString()}</strong>
        </div>

        <h3>{product.name}</h3>
        <p>{product.summary}</p>

        <Link className="card-link" to={`/products/${product.id}`}>
          View details
        </Link>
      </div>
    </article>
  );
}
