// == Import npm
import React, { useEffect } from 'react';

// == Import style
import './styles.scss';

// Import React router
import { Route, Switch } from 'react-router-dom';

// Import Component
import NavBar from 'src/components/NavBar';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import CategoryPage from 'src/components/CategoryPage';
import ProductPage from 'src/components/ProductPage';
import ModalCart from 'src/components/ModalCart';
import Checkout from 'src/components/Checkout';

// == Composant
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="app">
      <NavBar />
      {/* <ModalCart /> */}
      {/*  <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/category/:slug">
          <CategoryPage />
        </Route>
        <Route path="/product/:slug">
          <ProductPage />
        </Route>
      </Switch>*/}
      <Checkout />
      <Footer />
    </div>
  );
};

// == Export
export default App;
