// Import React
import React from 'react';

// Import Style
import './styles.scss';

// Import IMG

// Import styledComponent
import { H4, H5, Body } from 'src/styles/styledComponents';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// --> Component
const BestGear = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="bestgear">
      <div className="bestgear_image" />
      <div className="bestgear_content">
        {isMobile && (
          <H5 className="content-title">
            bringing you the <span style={{ color: '#D87D4A' }}>best</span>{' '}
            audio gear
          </H5>
        )}
        {!isMobile && (
          <H4 className="content-title">
            bringing you the <span style={{ color: '#D87D4A' }}>best</span>{' '}
            audio gear
          </H4>
        )}
        <Body color="#7d7d7d">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Body>
      </div>
    </div>
  );
};

export default BestGear;
