import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-card">
        <span className="notfound-code">404</span>

        <h1>Không tìm thấy trang</h1>

        <p>
          Đường dẫn này chưa được thiết lập trong ứng dụng.
        </p>

        <div className="notfound-actions">
          <Link className="button button-primary" to="/">
            Back Home
          </Link>

          <Link className="button button-secondary" to="/products">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
