import BasketItem from './BasketItem';
import s from './ShoppingBasket.module.css';

export default function ShoppingBasket({ basket, onDelete }) {
  const calculateDiscount = (amount, price) => {
    let result = 0;
    for (let i = 1; i <= amount; i++) {
      i % 3 === 0 ? (result += price / 2) : (result += price);
    }
    return result;
  };

  const calculateTotal = () => {
    return basket.reduce(
      (total, item) =>
        item.name === 'Папайя'
          ? total + calculateDiscount(item.amount, item.price)
          : total + item.amount * item.price,
      0,
    );
  };

  return (
    <>
      <h2 className={s.basketTitle}>Корзина</h2>
      {basket.length === 0 && (
        <h1 className={s.basketTitle} style={{ color: 'grey' }}>
          Вы не добавили ни одного товара
        </h1>
      )}
      <ul className={s.productList}>
        {basket.map(product => {
          return (
            <BasketItem
              product={product}
              key={product.name}
              subtotalPrice={
                product.name === 'Папайя'
                  ? calculateDiscount(product.amount, product.price)
                  : product.amount * product.price
              }
              onSubmit={onDelete}
            />
          );
        })}
      </ul>
      {basket.length > 0 && (
        <h3 className={s.basketTitle}>Общая сумма = {calculateTotal()} $</h3>
      )}
    </>
  );
}
