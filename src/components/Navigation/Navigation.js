import { NavLink } from 'react-router-dom';
import p from 'prop-types';
import styles from './Navigation.module.css';

export default function Navigation({ basketLength }) {
  // const countAmount = state => state.reduce((acc, el) => acc + el.amount, 0);
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
        {!!basketLength && (
          <div className={styles.basketLabel}>{basketLength}</div>
        )}
        Корзина
      </NavLink>
    </nav>
  );
}

Navigation.propTypes = {
  basketLength: p.number.isRequired,
};
