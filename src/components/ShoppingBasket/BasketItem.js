import s from './BasketItem.module.css';

export default function BasketItem({ amount, image, name, price, onClick }) {
  return (
    <li className={s.basketItem}>
      <img src={image} alt={name} className={s.productImage} />
      {amount && <p className={s.boughtAmount}>{amount} шт.</p>}
      <p className={s.productName}>{name}</p>
      <p className={s.productCost}>Всего : {price} $</p>
      <button className={s.productButton} type="button" onClick={onClick}>
        <i className="material-icons button__icon">delete</i>
        Убрать
      </button>
    </li>
  );
}
