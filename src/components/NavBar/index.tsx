// Import React
import React from 'react';

// Import Style
import './styles.scss';
import { OverlineText } from 'src/styles/styledComponents';

// Import librairie
import { useMediaQuery } from 'react-responsive';

// Import img
import logo from 'src/assets/img/audiophile.png';

// Import react-icon
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const style = {
  backgroundColor: '#141414',
};

// Component
const NavBar = () => {
  const isDeskop = useMediaQuery({ query: '(min-width: 900px)' });

  return (
    <div className="navbar container-large" style={style}>
      {!isDeskop && <GiHamburgerMenu color="#fff" size="1.8em" />}
      <img src={logo} alt="logo" />
      {isDeskop && (
        <nav className="nav">
          <a href="#">
            <OverlineText color="#fff">Home</OverlineText>
          </a>
          <a href="#">
            <OverlineText color="#fff">Headphones</OverlineText>
          </a>
          <a href="#">
            <OverlineText color="#fff">speakers</OverlineText>
          </a>
          <a href="#">
            <OverlineText color="#fff">eadphones</OverlineText>
          </a>
        </nav>
      )}
      <AiOutlineShoppingCart color="#fff" size="1.8em" />
    </div>
  );
};

export default NavBar;
