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
              image={product.image}
              amount={product.amount}
              key={product.name}
              name={product.name}
              price={
                product.name === 'Папайя'
                  ? calculateDiscount(product.amount, product.price)
                  : product.amount * product.price
              }
              onClick={() => onDelete(product)}
            />
          );
        })}
      </ul>
    </>
  );
}
