import { useNavigate } from 'react-router-dom';

const qaChecks = [
  'Mở /admin và xem trang con có hiển thị không.',
  'Mở /admin/settings sau khi tải lại trang.',
  'Bấm nút quay lại và kiểm tra lịch sử trình duyệt.',
  'Kiểm tra link đang chọn khi đổi trang.'
];

export default function AdminSettings() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="eyebrow">Cài đặt</p>
          <h1>Thiết lập hệ thống</h1>
        </div>

        <span className="pill">/admin/settings</span>
      </div>

      <div className="settings-grid">
        <article className="settings-card">
          <h3>Bảo vệ trang</h3>
          <p>
            Ví dụ ý tưởng cho trang cần đăng nhập.
          </p>
        </article>

        <article className="settings-card">
          <h3>Thay thế lịch sử</h3>
          <p>
            Dùng khi không muốn quay lại bước trước.
          </p>
        </article>

        <article className="settings-card">
          <h3>Bố cục linh hoạt</h3>
          <p>
            Hiển thị ổn trên màn hình lớn và nhỏ.
          </p>
        </article>
      </div>
    </div>
  );
}