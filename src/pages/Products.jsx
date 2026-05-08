import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import ProductCard from '../components/ProductCard';
import { categoryOptions, products, sortOptions } from '../data/products';

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
      <div className="section-header">
        <div>
          <p className="eyebrow">Member 2 starter</p>
          <h2>Products</h2>
        </div>
        <p className="muted">Use the filters to demonstrate query-string state.</p>
      </div>

      <div className="toolbar">
        <label className="field">
          <span>Category</span>
          <select value={category} onChange={(event) => updateSearchParams('category', event.target.value)}>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sort</span>
          <select value={sort} onChange={(event) => updateSearchParams('sort', event.target.value)}>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <Link className="button button-secondary" to="/products">
          Reset filters
        </Link>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No products found"
          description="Adjust category or sort options to show product results."
        />
      )}
    </section>
  );
}
