import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Trang con',
    description: 'Khu quản trị hiển thị bằng layout và trang lồng nhau.'
  },
  {
    title: 'Lịch sử trình duyệt',
    description: 'Có nút quay lại và điều hướng sang trang khác.'
  },
  {
    title: 'Trạng thái trên URL',
    description: 'Bộ lọc vẫn giữ được khi nằm trong địa chỉ trang.'
  }
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <section className="admin-hero">
        <div>
          <p className="eyebrow">Admin Dashboard</p>

          <h1>Khu quản trị</h1>

          <p>
            Đây là phần điều hướng sang các trang con trong khu quản trị.
          </p>
        </div>

        <div className="admin-hero-actions">
          <button
            className="button button-primary"
            onClick={() => navigate('/admin/products')}
          >
            Sang sản phẩm
          </button>

          <button
            className="button button-secondary"
            onClick={() => navigate(-1)}
          >
            Quay lại
          </button>
        </div>
      </section>

      <section className="admin-card-grid">
        {cards.map((card) => (
          <article key={card.title} className="admin-info-card">
            <div className="admin-card-icon"></div>

            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}