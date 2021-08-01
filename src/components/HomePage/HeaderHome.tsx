// Import React
import React from 'react';

// Import Style
import './styles.scss';
import {
  OverlineText,
  H1,
  SubText,
  Button,
  H1Mobile,
} from 'src/styles/styledComponents';

// Import React Router
import { Link } from 'react-router-dom';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

const HeaderHome = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="container-headerhome">
      <div className="headerhome container-large">
        <div className="headerhome_container">
          <OverlineText color="#8c8c8c">New product</OverlineText>

          {/* Change size of Typography according to the device*/}
          {isMobile && (
            <H1Mobile color="#fff" style={{ margin: '20px 0 20px 0' }}>
              XX99 Mark II <br /> Headphones
            </H1Mobile>
          )}
          {!isMobile && (
            <H1 color="#fff" style={{ margin: '20px 0 20px 0' }}>
              XX99 Mark II <br /> Headphones
            </H1>
          )}

          <SubText color="#c6c6c6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </SubText>

          <Link to="/product/xx99-mark-two-headphones">
            <Button primary style={{ marginTop: '30px' }}>
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
