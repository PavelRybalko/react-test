import { useState } from 'react';
import p from 'prop-types';
import s from './ProductItem.module.css';

function ProductItem({ amount, product, onSubmit }) {
  const [productAmount, setProductAmount] = useState(1);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'increment':
        setProductAmount(state => state + 1);
        break;

      case 'decrement':
        setProductAmount(state => (state <= 0 ? state : state - 1));
        break;

      case 'quantity':
        setProductAmount(+value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(product, productAmount);

    setProductAmount(1);
  };

  return (
    <li className={s.productItem}>
      <img src={product.image} alt={product.name} className={s.productImage} />
      {amount && <p className={s.boughtAmount}>{amount} шт.</p>}
      <p className={s.productName}>{product.name}</p>
      <p className={s.productPrice}>{product.price} $</p>

      {product.name === 'Папайя' ? (
        <p className={s.additionalText}>*Скидка на каждый 3кг 50% !</p>
      ) : (
        ' '
      )}

      <form onSubmit={handleSubmit}>
        <button className={s.productButton} type="submit">
          <i className="material-icons button__icon">shopping_cart</i>
          Купить
        </button>
        <div className={s.quantityBlock}>
          <button
            type="button"
            name="decrement"
            className={s.quantityArrowMinus}
            onClick={handleChange}
          >
            -
          </button>
          <input
            name="quantity"
            className={s.quantityNum}
            type="number"
            min="1"
            value={productAmount}
            onChange={handleChange}
            size="2"
          />
          <button
            type="button"
            name="increment"
            className={s.quantityArrowPlus}
            onClick={handleChange}
          >
            +
          </button>
        </div>
      </form>
    </li>
  );
}

ProductItem.propTypes = {
  product: p.shape({
    name: p.string.isRequired,
    image: p.string.isRequired,
    price: p.number.isRequired,
    amount: p.number,
  }),
  amount: p.number,
  onSubmit: p.func.isRequired,
};

export default ProductItem;
