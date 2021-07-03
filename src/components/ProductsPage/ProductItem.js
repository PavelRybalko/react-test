import p from 'prop-types';
import s from './ProductItem.module.css';

function ProductItem({ amount, image, name, price, onClick }) {
  return (
    <li className={s.productItem}>
      <img src={image} alt={name} className={s.productImage} />
      {amount && <p className={s.boughtAmount}>{amount} шт.</p>}
      <p className={s.productName}>{name}</p>
      <p className={s.productPrice}>{price} $</p>
      <button className={s.productButton} type="button" onClick={onClick}>
        <i className="material-icons button__icon">shopping_cart</i>
        Купить
      </button>
    </li>
  );
}

ProductItem.propTypes = {
  image: p.string.isRequired,
  name: p.string.isRequired,
  price: p.number.isRequired,
  onClick: p.func.isRequired,
};

export default ProductItem;
