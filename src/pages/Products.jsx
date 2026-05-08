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
    return sorted.sort((left, right) =>
      left.name.localeCompare(right.name)
    );
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
    <div className="products-layout">
      <section className="products-hero">
        <div className="products-hero-content">
          <div>
            <p className="eyebrow">React Router Query String</p>

            <h1>Products Navigation Demo</h1>

            <p className="products-description">
              Demonstration of filtering, sorting, query strings,
              dynamic route params, and SPA navigation.
            </p>
          </div>

          <div className="products-summary">
            <div className="summary-box">
              <h3>{filteredProducts.length}</h3>
              <p>Products Found</p>
            </div>

            <div className="summary-box">
              <h3>{category}</h3>
              <p>Category</p>
            </div>

            <div className="summary-box">
              <h3>{sort}</h3>
              <p>Sort Method</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stack">
        <div className="toolbar modern-toolbar">
          <div className="toolbar-group">
            <label className="field">
              <span>Category</span>

              <select
                value={category}
                onChange={(event) =>
                  updateSearchParams('category', event.target.value)
                }
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Sort</span>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} queryString={searchQuery} />
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid modern-product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No products found"
            description="Adjust category or sorting filters to display matching products."
          />
        )}
      </section>
    </div>
  );
}
