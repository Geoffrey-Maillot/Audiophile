// == Import npm
import React from 'react';

// == Import style
import './styles.scss';

/*interface Props {
  title: string;
};
const Title = ({title}: Props) => <H1>{title}</H1>*/

// Import Component
import NavBar from 'src/components/NavBar';
import HomePage from 'src/components/HomePage';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <HomePage />
  </div>
);

// == Export
export default App;
