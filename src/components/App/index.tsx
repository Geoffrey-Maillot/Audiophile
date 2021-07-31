// == Import npm
import React from 'react';

// == Import style
import './styles.scss';

// Import React router
import { Route, Switch } from 'react-router-dom';

/*interface Props {
  title: string;
};
const Title = ({title}: Props) => <H1>{title}</H1>*/

// Import Component
import NavBar from 'src/components/NavBar';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import CategoryPage from 'src/components/CategoryPage';
import ProductPage from 'src/components/ProductPage';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
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
    </Switch>

    <Footer />
  </div>
);

// == Export
export default App;
