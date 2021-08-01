// Import React
import React from 'react';

// Import Style
import './styles.scss';

// Import React Router
import { Link } from 'react-router-dom';

// Import IMG
import logo from 'src/assets/img/audiophile.png';
import logoFacebook from 'src/assets/img/shared/desktop/icon-facebook.svg';
import logoInstagram from 'src/assets/img/shared/desktop/icon-instagram.svg';
import logoTwitter from 'src/assets/img/shared/desktop/icon-twitter.svg';

// Import styledComponent
import { SubText, Body } from 'src/styles/styledComponents';

const Footer = () => (
  <div className="container-footer">
    <footer className="footer container-large">
      <div className="navbar ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link" href="#">
            <SubText color="#fff">Home</SubText>
          </Link>
          <Link to="/category/headphones" className="nav-link" href="#">
            <SubText color="#fff">Headphones</SubText>
          </Link>
          <Link to="/category/speakers" className="nav-link" href="#">
            <SubText color="#fff">speakers</SubText>
          </Link>
          <Link to="/category/earphones" className="nav-link" href="#">
            <SubText color="#fff">eadphones</SubText>
          </Link>
        </nav>
      </div>
      <div className="content">
        <Body className="content-text" color="#878787">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Body>
        <Body className="copyright" color="#878787">
          Copyright 2021. All Rights Reserved
        </Body>
        <nav className="logo-nav">
          <img src={logoFacebook} alt="Logo Facebook" />
          <img src={logoTwitter} alt="Logo Twitter" />
          <img src={logoInstagram} alt="Logo Instagram" />
        </nav>
      </div>
    </footer>
  </div>
);

export default Footer;
