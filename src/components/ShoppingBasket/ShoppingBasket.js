import { useState, useEffect } from 'react';
// import {
//   Link,
//   Route,
//   useRouteMatch,
//   useLocation,
//   useHistory,
// } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import s from './ShoppingBasket.module.css';

export default function ShoppingBasket() {
  // const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState(null);
  // const { path, url } = useRouteMatch();
  // const location = useLocation();
  // const history = useHistory();

  // const onInputChange = ({ target }) => {
  //   setQuery(target.value);
  // };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   if (query.trim() === '') {
  //     return toast.error('Введите слово для поиска');
  //   }
  //   history.push({ ...location, search: `searchQuery=${query}` });
  //   setQuery('');
  // };

  return <div className="basket"></div>;
}
