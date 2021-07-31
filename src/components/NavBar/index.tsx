// Import React
import React from 'react';

// Import Style
import './styles.scss';
import { SubText } from 'src/styles/styledComponents';

// Import React Router
import { Link, NavLink } from 'react-router-dom';

// Import librairie
import { useMediaQuery } from 'react-responsive';

// Import img
import logo from 'src/assets/img/audiophile.png';

// Import react-icon
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// Component
const NavBar = () => {
  const isDeskop = useMediaQuery({ query: '(min-width: 900px)' });

  return (
    <div className="container-navbar">
      <div className="navbar container-large">
        {!isDeskop && <GiHamburgerMenu color="#fff" size="1.8em" />}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {isDeskop && (
          <nav className="nav">
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              exact
              to="/"
            >
              <SubText color="inherit">Home</SubText>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              exact
              to="/category/headphones"
            >
              <SubText color="inherit">Headphones</SubText>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              exact
              to="/category/speakers"
            >
              <SubText color="inherit">Speakers</SubText>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              exact
              to="/category/earphones"
            >
              <SubText color="inherit">Earphones</SubText>
            </NavLink>
          </nav>
        )}
        <AiOutlineShoppingCart color="#fff" size="1.8em" />
      </div>
    </div>
  );
};

export default NavBar;
