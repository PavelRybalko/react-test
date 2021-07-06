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

  const addProduct = (product, productAmount) => {
    const foundIndex = basket.findIndex(el => el.name === product.name);
    toast.success('Товар добавлен в корзину', toastOptions);

    if (foundIndex === -1) {
      const newProduct = { ...product, amount: productAmount };
      setBasket(
        state => [...state, newProduct],
        () => {
          console.log(
            'Функция которая выполнится в конце обновления состояния.(в классовых компонентах есть!)',
          );
        },
      );
    } else {
      setBasket(state =>
        state.map(
          (el, idx) =>
            idx === foundIndex
              ? { ...el, amount: el.amount + productAmount }
              : el,
          // {
          //   if (idx === foundIndex) {
          //     return { ...el, amount: el.amount + productAmount };
          //   }
          //   return el;
          // }
        ),
      );
    }
  };

  const deleteProduct = (product, productAmount) => {
    let newState;

    if (product.amount > 1 && product.amount !== productAmount) {
      const foundIndex = basket.findIndex(el => el.name === product.name);

      newState = basket.map((el, idx) => {
        if (idx === foundIndex) {
          return { ...el, amount: el.amount - productAmount };
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
              onAddToBasket={addProduct}
              basket={basket}
            />
          </Route>

          <Route path="/shoppingBasket">
            <ShoppingBasket basket={basket} onDelete={deleteProduct} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
