import { lazy, Suspense, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader';
import Container from './components/Container';
import Navigation from './components/Navigation';
import ProductsPage from './components/ProductsPage';
import styles from './App.module.css';
import productsData from './data/products.json';
const ShoppingBasket = lazy(() =>
  import('./components/ShoppingBasket' /* webpackChunkName: "ShoppingBasket"*/),
);

const toastOptions = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product, productAmount) => {
    setBasket(state => {
      const foundIndex = state.findIndex(el => el.name === product.name);
      toast.success('Товар добавлен в корзину', toastOptions);

      if (foundIndex === -1) {
        const newProduct = { ...product, amount: productAmount };
        return [...state, newProduct];
      } else {
        const newState = state.map((el, idx) => {
          if (idx === foundIndex) {
            return { ...el, amount: el.amount + productAmount };
          }

          return el;
        });
        return newState;
      }
    });
  };

  const deleteFromBasket = product => {
    let newState;

    if (product.amount > 1) {
      const foundIndex = basket.findIndex(el => el.name === product.name);

      newState = basket.map((el, idx) => {
        if (idx === foundIndex) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      });
    } else {
      newState = basket.filter(el => el.name !== product.name);
    }
    toast.info('Товар удалён', toastOptions);
    setBasket(newState);
  };

  return (
    <Container>
      <header className={styles.header}>
        <Navigation basket={basket} />
      </header>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <ProductsPage
              products={productsData}
              onAddToBasket={addToBasket}
              basket={basket}
            />
          </Route>

          <Route path="/shoppingBasket">
            <ShoppingBasket basket={basket} onDelete={deleteFromBasket} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
