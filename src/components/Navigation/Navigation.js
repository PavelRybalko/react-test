import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation({ basket }) {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>

      <NavLink
        to="/shoppingBasket"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        {!!basket.length && <div className={styles.basketLabel}>+</div>}
        Корзина
      </NavLink>
    </nav>
  );
}
