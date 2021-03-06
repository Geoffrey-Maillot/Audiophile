// Import React
import React, { useEffect, useState } from 'react';

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
import { RiCloseFill } from 'react-icons/ri';

// ==> Recoil
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  statusCartComponent,
  exitAnimation,
  cartValue,
  boolOpenMenu,
} from '../../Recoil/index';

// Component
const NavBar = () => {
  // Media Querries ==>
  const isDeskop = useMediaQuery({ query: '(min-width: 900px)' });

  // Close CartModal ==>
  const [activeCart, setActiveCart] = useRecoilState(statusCartComponent);

  // Animation Close
  const SetPlayExitAnimation = useSetRecoilState(exitAnimation);

  // ==> handler open / close CartModal
  const handlerOnClickModal = (evt: any) => {
    // if CartModal is close, Open it
    activeCart === false ? setActiveCart(true) : null;
    console.log(evt.target);
    //  else play animation and close
    if (
      evt.target.className === 'container-modalcart container-large' ||
      evt.target.className === 'modal' ||
      (evt.target.closest('.navbar_button-cart') && activeCart)
    ) {
      SetPlayExitAnimation(true);

      setTimeout(() => {
        SetPlayExitAnimation(false);
        setActiveCart(false);
      }, 400);
    }
  };

  // ==> Responsive Menu
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(boolOpenMenu);

  // ==> Cart
  const cart = useRecoilValue(cartValue);

  // Scroll to top ==>
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="container-navbar">
      <div className="navbar container-large">
        {!isDeskop && (
          <button
            style={{ border: 'none', backgroundColor: 'transparent' }}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <GiHamburgerMenu color="#fff" size="1.8em" />
          </button>
        )}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav
          className={`nav entrance ${!isDeskop && !menuIsOpen && 'desktop'} ${
            !isDeskop && menuIsOpen && 'responsive-menu'
          }`}
        >
          {/*  Button CLose Menu */}
          {menuIsOpen && !isDeskop && (
            <button
              className="nav_close-button"
              onClick={() => setMenuIsOpen(false)}
            >
              <RiCloseFill size="2.2em" />
            </button>
          )}
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            exact
            to="/"
            onClick={() => setMenuIsOpen(false)}
          >
            <SubText color="inherit">Home</SubText>
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            exact
            to="/category/headphones"
            onClick={() => setMenuIsOpen(false)}
          >
            <SubText color="inherit">Headphones</SubText>
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            exact
            to="/category/speakers"
            onClick={() => setMenuIsOpen(false)}
          >
            <SubText color="inherit">Speakers</SubText>
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            exact
            to="/category/earphones"
            onClick={() => setMenuIsOpen(false)}
          >
            <SubText color="inherit">Earphones</SubText>
          </NavLink>
        </nav>

        <button
          className="navbar_button-cart"
          type="button"
          onClick={(evt) => handlerOnClickModal(evt)}
        >
          <AiOutlineShoppingCart color="#fff" size="1.8em" />
          {cart.length > 0 && (
            <span className="navbar_button-cart--number-article">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
