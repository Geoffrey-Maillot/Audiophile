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
import ThanksMessage from 'src/components/ThanksMessage';

interface Props {
  activeCart?: boolean;
  activeThanks?: boolean;
}

// ==> Import Data
import data from 'src/data/data.json';

// ==> Import Recoil
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { initialData, statusCartComponent } from '../../Recoil/index';

// == Composant
const App = ({ activeThanks = false }: Props) => {
  // ==> Get Initial Data
  const setInitialData = useSetRecoilState(initialData);
  useEffect(() => {
    setInitialData(data);
  }, []);

  const activeCart = useRecoilValue(statusCartComponent);

  // ==> Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Return ==>
  return (
    <div className="app">
      <NavBar />
      {activeCart && <ModalCart />}
      {activeThanks && <ThanksMessage />}
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
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
