// == Import npm
import React, { useEffect } from 'react';

// == Import style
import './styles.scss';

// Import React router
import { Route, Switch, Redirect } from 'react-router-dom';

// Import Component
import NavBar from 'src/components/NavBar';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import CategoryPage from 'src/components/CategoryPage';
import ProductPage from 'src/components/ProductPage';
import ModalCart from 'src/components/ModalCart';
import Checkout from 'src/components/Checkout';
import ThanksMessage from 'src/components/ThanksMessage';

// ==> Import Data
import data from 'src/data/data.json';

// ==> Import Recoil
import { useSetRecoilState, useRecoilValue } from 'recoil';

import {
  initialData,
  statusCartComponent,
  cartValue,
  modalThanksMessage,
  boolOpenMenu,
} from '../../Recoil/index';

// == Composant
const App = () => {
  // ==> Get Initial Data
  const setInitialData = useSetRecoilState(initialData);
  useEffect(() => {
    setInitialData(data);
  }, []);

  const activeCart = useRecoilValue(statusCartComponent);
  const cartIsOpen = useRecoilValue(statusCartComponent);
  const cart = useRecoilValue(cartValue);
  const thanksMessageIsOpen = useRecoilValue(modalThanksMessage);
  const menuIsOpen = useRecoilValue(boolOpenMenu);

  // ==> Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Return ==>
  return (
    <div
      className={`app ${
        (cartIsOpen || thanksMessageIsOpen || menuIsOpen) && 'fixed-position'
      }`}
    >
      <NavBar />
      {activeCart && <ModalCart />}
      {thanksMessageIsOpen && <ThanksMessage />}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/category/:slug">
          <CategoryPage />
        </Route>
        <Route path="/product/:slug">
          <ProductPage />
        </Route>
        <Route path="/checkout">
          {cart.length > 0 ? <Checkout /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
