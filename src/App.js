import { lazy, Suspense, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import Container from './components/Container';
import Navigation from './components/Navigation/Navigation';
import ProductsPage from './components/ProductsPage/ProductsPage';
import styles from './App.module.css';
// const ProductsPage = lazy(() =>
//   import('./components/ProductsPage/ProductsPage' /* webpackChunkName: "ProductsPage"*/),
// );
import productsData from './data/products.json';
const ShoppingBasket = lazy(() =>
  import(
    './components/ShoppingBasket/ShoppingBasket' /* webpackChunkName: "ShoppingBasket"*/
  )
);

export default function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((state) => {
      const foundIndex = state.findIndex((el) => el.name === product.name);

      if (foundIndex === -1) {
        const newProduct = { ...product, amount: 1 };
        console.log('amount ', newProduct.amount);
        return [...state, newProduct];
      } else {
        const newState = state.map((el, idx) => {
          if (idx === foundIndex) {
            el.amount += 1;
          }
          console.log('element -', el);
          return el;
        });
        console.log('newState -', newState);
        return newState;
      }
    });
  };

  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
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
            <ShoppingBasket />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
