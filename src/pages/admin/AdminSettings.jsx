import { useNavigate } from 'react-router-dom';

const settingsCards = [
  {
    title: 'Bảo mật',
    description: 'Mô phỏng quyền truy cập và các hành vi điều hướng an toàn hơn.'
  },
  {
    title: 'Trải nghiệm',
    description: 'Nhóm giao diện này tập trung vào độ thoáng, tương phản và thứ bậc thông tin.'
  },
  {
    title: 'Responsive',
    description: 'Các khối nội dung chuyển sang layout một cột trên thiết bị nhỏ.'
  }
];

export default function AdminSettings() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Cài đặt</p>
          <h1>Thiết lập hệ thống</h1>
          <p className="lead">Trang này thể hiện một layout cài đặt nhẹ, sạch và có cảm giác sản phẩm thật.</p>
        </div>

        <span className="pill">/admin/settings</span>
      </div>

      <div className="settings-grid">
        {settingsCards.map((card) => (
          <article key={card.title} className="settings-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>

      <div className="settings-footer">
        <button className="button button-primary" onClick={() => navigate('/admin/products')}>
          Xem sản phẩm
        </button>
        <button className="button button-secondary" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    </div>
  );
}
