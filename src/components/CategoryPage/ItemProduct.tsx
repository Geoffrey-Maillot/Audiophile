// Import React
import React from 'react';

// Import Style
import './styles.scss';
import {
  H4,
  H5,
  OverlineText,
  Body,
  Button,
} from 'src/styles/styledComponents';

// Import IMG
import headPhoneMarkTwoMobile from 'src/assets/img/category-headphones/mobile/image-xx99-mark-two.jpg';
import headPhoneMarkTwoTablet from 'src/assets/img/category-headphones/tablet/image-xx99-mark-two.jpg';
import headPhoneMarkTwoDesktop from 'src/assets/img/category-headphones/desktop/image-xx99-mark-two.jpg';


// Import Librairie
import { useMediaQuery } from 'react-responsive';

// --> Component

const ItemProduct = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1124px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  return (
  
        <div className="product">
          <div className="product_img">
            <img
              src={
                isMobile
                  ? headPhoneMarkTwoMobile
                  : isTablet
                  ? headPhoneMarkTwoTablet
                  : isDesktop
                  ? headPhoneMarkTwoDesktop
                  : null
              }
              alt="Product Image"
            />
          </div>

          <div className="product_description">
            <OverlineText className="overline" color="#d87d4a">
              New Product
            </OverlineText>
            {isMobile && <H5 className="title">XX99 Mark II Headphones</H5>}
            {!isMobile && <H4 className="title">XX99 Mark II Headphones</H4>}
            <Body className="body" color="#8c8c8c">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Body>
            <Button primary>See Product</Button>
          </div>
        </div>
  );
};

export default ItemProduct;
