# Routing with React Router

Skeleton project for a midterm assignment focused on React Router. The repo is organized so three members can work in parallel on routing, params/query string, nested routes/history, reporting, and demo assets.

## Tech Stack

- React
- Vite
- React Router DOM
- TailwindCSS: optional

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```text
MIDTERM_FULLSTACK/
│
├── node_modules/
│
├── src/
│   │
│   ├── components/
│   │   ├── EmptyState.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── layouts/
│   │   ├── AdminLayout.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── admin/
│   │   │
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Products.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Feature Split

### Member 1 - UI + Basic Routing + Visual Assets
- `Home`
- `Products`
- `Navbar`
- `Link` / `NavLink`
- `BrowserRouter`
- `Route` / `Routes`
- Basic SPA routing
- Slide: intro and basic routing
- Extra: beautiful screenshots, image highlights, flow diagram

### Member 2 - Params + Query String + Technical Explanation
- `ProductDetail`
- `useParams`
- `useSearchParams`
- Filter and sort UI
- Slide: route params, query string, URL state
- Extra: step-by-step logic, flow explanation, code explanation

### Member 3 - Nested Routes + Navigation + QA
- Admin routes
- `Outlet`
- `useNavigate`
- Browser history
- Nested routes
- History stack
- Push vs replace
- Extra: report summary, format check, auto table of contents, app-wide testing, demo video

## Route Map

- `/` - Home
- `/products` - Products list
- `/products/:id` - Product detail
- `/admin` - Admin dashboard
- `/admin/users` - Admin users
- `/admin/settings` - Admin settings
- `*` - Not found

## Starter Responsibilities

### Member 1
- Build navbar and public layout.
- Keep the home page lightweight and demo-friendly.
- Prepare screenshot material and a routing flow diagram.

### Member 2
- Finish product detail logic.
- Wire query-string based filtering and sorting.
- Document the param/query flow in a report or slide.

### Member 3
- Complete nested admin routes.
- Implement back navigation and history examples.
- Run QA, fix formatting, and prepare final demo script.

## Required Extra Deliverables

### Flow Diagram
```text
Products
  ↓
Click Product
  ↓
/products/:id
  ↓
useParams()
  ↓
Render Product Detail
```

### History Stack Diagram
```text
Home
↓
Products
↓
Product Detail
Back:
navigate(-1)
```

### Push vs Replace
| Push | Replace |
| --- | --- |
| add history | replace history |
| can go back | cannot go back |

### Video Script
- 0:00–0:30: intro app
- 0:30–1:30: params + query
- 1:30–2:30: nested routes + back button
- 2:30–3:00: code overview

## Testing Checklist

- Route params work correctly.
- Query string persists after refresh.
- Back button works with history stack.
- Nested routes render through `Outlet`.
- Responsive layout behaves on smaller screens.
- Basic navigation works without full page reload.

## Git Workflow

- Main branch: `main`
- Member 1 branch: `feature/basic-routing`
- Member 2 branch: `feature/params-query`
- Member 3 branch: `feature/nested-history`
