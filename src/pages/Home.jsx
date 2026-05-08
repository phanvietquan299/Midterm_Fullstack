import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Chuyển trang',
    description:
      'Đi giữa các trang mà không tải lại toàn bộ ứng dụng.'
  },
  {
    title: 'Trang chi tiết',
    description:
      'Mở trang chi tiết theo mã sản phẩm ở URL.'
  },
  {
    title: 'Bộ lọc trên URL',
    description:
      'Lọc và sắp xếp vẫn giữ nguyên sau khi tải lại trang.'
  },
  {
    title: 'Khu vực admin',
    description:
      'Phần quản trị dùng layout riêng và trang con.'
  }
];

const routeCards = [
  {
    route: '/',
    title: 'Home Route',
    desc: 'Trang chính và menu điều hướng.'
  },
  {
    route: '/products',
    title: 'Products Route',
    desc: 'Danh sách sản phẩm, lọc và sắp xếp.'
  },
  {
    route: '/products/:id',
    title: 'Dynamic Detail Route',
    desc: 'Trang chi tiết theo mã sản phẩm.'
  },
  {
    route: '/admin',
    title: 'Admin Dashboard',
    desc: 'Khu quản trị có trang con.'
  },
  {
    route: '/admin/products',
    title: 'Admin Products',
    desc: 'Trang sản phẩm trong khu quản trị.'
  }
];

const userFlows = [
  {
    title: 'Flow 1: Danh sách → chi tiết',
    description:
      'Vào danh sách, bấm một sản phẩm, rồi mở trang chi tiết theo mã trên URL.'
  },
  {
    title: 'Flow 2: Lọc và tải lại',
    description:
      'Chọn bộ lọc, sắp xếp, rồi tải lại trang mà trạng thái vẫn còn.'
  }
];

const stats = [
  {
    value: '8+',
    label: 'Routes Configured'
  },
  {
    value: 'SPA',
    label: 'Navigation System'
  },
  {
    value: '100%',
    label: 'Responsive Design'
  },
  {
    value: 'React',
    label: 'Modern Frontend'
  }
];

export default function Home() {
  return (
    <div className="home-layout">
      <section className="hero-section">
        <div className="hero-left">

          <h1>Mini App</h1>

          <div className="hero-actions">
            <Link className="button button-primary" to="/products">
              Xem sản phẩm
            </Link>

            <Link className="button button-secondary" to="/admin">
              Mở quản trị
            </Link>
          </div>

          <div className="stats-row">
            {stats.map((item) => (
              <div key={item.label} className="stat-box">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="preview-window">
            <div className="preview-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-body">
              <div className="preview-sidebar">
                <div className="sidebar-item active">Home</div>
                <div className="sidebar-item">Products</div>
                <div className="sidebar-item">Admin</div>
                <div className="sidebar-item">Product Detail</div>
              </div>

              <div className="preview-content">
                <div className="preview-card large"></div>

                <div className="preview-grid">
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tính năng chính</p>
            <h2>Điểm nổi bật</h2>
          </div>

          <p>
            Các màn hình bên dưới cho thấy những kiểu điều hướng chính của ứng dụng.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon"></div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flows-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Hai luồng mẫu</p>
            <h2>Kịch bản cần chụp</h2>
          </div>

          <p>
            Hai luồng này đúng với yêu cầu của đề.
          </p>
        </div>

        <div className="flow-grid">
          {userFlows.map((flow) => (
            <article key={flow.title} className="flow-card">
              <h3>{flow.title}</h3>
              <p>{flow.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routes-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Sơ đồ đường dẫn</p>
            <h2>Các route chính</h2>
          </div>

          <p>
            Các đường dẫn đang dùng trong app.
          </p>
        </div>

        <div className="routes-grid">
          {routeCards.map((item) => (
            <article key={item.route} className="route-card">
              <span className="route-badge">{item.route}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
