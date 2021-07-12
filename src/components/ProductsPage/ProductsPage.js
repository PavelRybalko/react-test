import ProductItem from './ProductItem.js';
import p from 'prop-types';
import s from './ProductPage.module.css';

function ProductsPage({ products, onAddToBasket, basket }) {
  const countBoughtAmount = product => {
    if (basket.length === 0) return;
    const foundProduct = basket.find(el => el.name === product.name);
    return foundProduct?.amount;
  };

  return (
    <>
      <h2 className={s.productTitle}>Продукты</h2>
      <ul className={s.productList}>
        {products.map(product => (
          <ProductItem
            amount={countBoughtAmount(product)}
            key={product.name}
            product={product}
            onSubmit={onAddToBasket}
          />
        ))}
      </ul>
    </>
  );
}

ProductsPage.propTypes = {
  products: p.arrayOf(
    p.shape({
      name: p.string.isRequired,
      image: p.string.isRequired,
      price: p.number.isRequired,
      amount: p.number,
    }),
  ),
  onAddToBasket: p.func.isRequired,
  basket: p.array.isRequired,
};

export default ProductsPage;
