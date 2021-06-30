import p from 'prop-types';
import s from './ProductItem.module.css';

function ProductItem({ name, price, onClick }) {
  return (
    <li>
      <p className={s.productName}>{name}</p>
      <p className={s.productPrice}>{price}</p>
      <button type="button" onClick={onClick}>
        Купить
      </button>
    </li>
  );
}

ProductItem.propTypes = {
  name: p.string.isRequired,
  price: p.number.isRequired,
  onClick: p.func.isRequired,
};

export default ProductItem;
