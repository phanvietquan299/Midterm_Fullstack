import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import ProductCard from '../components/ProductCard';
import { categoryOptions, products, sortOptions } from '../data/products';

function formatOptionLabel(option) {
  if (option === 'all') {
    return 'All products';
  }

  if (option === 'featured') {
    return 'Featured';
  }

  return option
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function sortProducts(list, sortKey) {
  const sorted = [...list];

  if (sortKey === 'price_asc') {
    return sorted.sort((left, right) => left.price - right.price);
  }

  if (sortKey === 'price_desc') {
    return sorted.sort((left, right) => right.price - left.price);
  }

  if (sortKey === 'name_asc') {
    return sorted.sort((left, right) => left.name.localeCompare(right.name));
  }

  return sorted;
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.toString();

  const filteredProducts = useMemo(() => {
    const categoryFiltered =
      category === 'all'
        ? products
        : products.filter((product) => product.category === category);

    return sortProducts(categoryFiltered, sort);
  }, [category, sort]);

  const updateSearchParams = (key, value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value === 'all' || value === 'featured') {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }

    setSearchParams(nextParams);
  };

  return (
    <section className="content-stack">
      <div className="section-header section-header-stack">
        <div>
          <h2>Products</h2>
          <p className="lead">
            Chọn bộ lọc bên dưới, rồi mở sản phẩm để xem trạng thái trên URL.
          </p>
        </div>

        <div className="section-notes">
          <span className="pill">Loại: {category}</span>
          <span className="pill">Sắp xếp: {sort}</span>
        </div>
      </div>

      <div className="toolbar">
        <label className="field">
          <span>Loại</span>
          <select
            value={category}
            onChange={(event) => updateSearchParams('category', event.target.value)}
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {formatOptionLabel(option)}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sắp xếp</span>
          <select
            value={sort}
            onChange={(event) => updateSearchParams('sort', event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {formatOptionLabel(option)}
              </option>
            ))}
          </select>
        </label>

        <Link className="button button-secondary" to="/products">
          Reset filters
        </Link>
      </div>

      {searchQuery ? (
        <div className="query-summary">
          <span className="pill">Trạng thái URL</span>
          <p>{searchQuery}</p>
        </div>
      ) : null}

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} queryString={searchQuery} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No products found"
          description="Adjust category or sorting filters to display matching products."
        />
      )}
    </section>
  );
}
