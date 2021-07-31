// Import React
import React from 'react';

// Import Style
import './styles.scss';
import {
  H4,
  H5,
  H6,
  OverlineText,
  Body,
  Button,
  ButtonShop,
} from 'src/styles/styledComponents';

// Import IMG Product
import headPhoneMarkTwoMobile from 'src/assets/img/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import headPhoneMarkTwoTablet from 'src/assets/img/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import headPhoneMarkTwoDesktop from 'src/assets/img/product-xx99-mark-two-headphones/desktop/image-product.jpg';

// Import IMG Gallery
// Mobile
import imageGalleryMobile1 from 'src/assets/img/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import imageGalleryMobile2 from 'src/assets/img/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import imageGalleryMobile3 from 'src/assets/img/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';
// Tablet
import imageGalleryTablet1 from 'src/assets/img/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg';
import imageGalleryTablet2 from 'src/assets/img/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg';
import imageGalleryTablet3 from 'src/assets/img/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg';
// Desktop
import imageGalleryDesktop1 from 'src/assets/img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import imageGalleryDesktop2 from 'src/assets/img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import imageGalleryDesktop3 from 'src/assets/img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

//Import IMG Aslo Like
//Mobile
import asloLikeMobile1 from 'src/assets/img/shared/mobile/image-xx99-mark-one-headphones.jpg';
import asloLikeMobile2 from 'src/assets/img/shared/mobile/image-xx59-headphones.jpg';
import asloLikeMobile3 from 'src/assets/img/shared/mobile/image-zx9-speaker.jpg';
//Mobile
import asloLikeTablet1 from 'src/assets/img/shared/tablet/image-xx99-mark-one-headphones.jpg';
import asloLikeTablet2 from 'src/assets/img/shared/tablet/image-xx59-headphones.jpg';
import asloLikeTablet3 from 'src/assets/img/shared/tablet/image-zx9-speaker.jpg';
//Mobile
import asloLikeDesktop1 from 'src/assets/img/shared/desktop/image-xx99-mark-one-headphones.jpg';
import asloLikeDesktop2 from 'src/assets/img/shared/desktop/image-xx59-headphones.jpg';
import asloLikeDesktop3 from 'src/assets/img/shared/desktop/image-zx9-speaker.jpg';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// Import Component
import Categories from 'src/components/Categories';
import BestGear from 'src/components/BestGear';

// --> COMPONENT
const ProductPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1124px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  {
    /*  RETURN -->*/
  }
  return (
    <section className="product-page container-large">
      <Body className="goback" color="#8c8c8c">
        Go Back
      </Body>
      {/* PRODUCT IMG / DESCRIPTION */}
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
          <H4 className="title">XX99 Mark II Headphones</H4>
          <Body className="body" color="#8c8c8c">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </Body>
          <H6>$ 2,999</H6>
          <ButtonShop className="buttonshop">
            <button className="buttonshop-button">-</button>0
            <button className="buttonshop-button">+</button>
          </ButtonShop>
          <Button primary>Add to cart</Button>
        </div>
      </div>
      {/* PRODUCT FEATURES */}
      <div className="container_box-features">
        <div className="features">
          <H5 className="features-title">Features</H5>
          <Body color="#8c8c8c">
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m). Discover
            clear, more natural sounding highs than the competition with ZX9’s
            signature planar diaphragm tweeter. Equally important is its
            powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
            unit. You’ll be able to enjoy equal sound quality whether in a large
            room or small den. Furthermore, you will experience new sensations
            from old songs since it can respond to even the subtle waveforms.
          </Body>
        </div>

        {/* PRODUCT BOX */}
        <div className="box">
          <H5 className="box-title">In the box</H5>
          <div className="box-content">
            <Body className="box-content--body" color="#8c8c8c">
              <span className="box-content--span">2x </span> Speaker Unit
            </Body>
            <Body className="box-content--body" color="#8c8c8c">
              <span className="box-content--span">2x </span> Speaker Cloth Panel
            </Body>
            <Body className="box-content--body" color="#8c8c8c">
              <span className="box-content--span">1x </span> User Manal
            </Body>
            <Body className="box-content--body" color="#8c8c8c">
              <span className="box-content--span">1x </span> 3.5mn 10m Audio
              Cable
            </Body>
            <Body className="box-content--body" color="#8c8c8c">
              <span className="box-content--span">1x </span> 10m Optical Cable
            </Body>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="gallery">
        <div className="gallery_left">
          <div
            className="gallery_left-image1"
            style={{
              background: `url(${
                isMobile
                  ? imageGalleryMobile1
                  : isTablet
                  ? imageGalleryTablet1
                  : isDesktop
                  ? imageGalleryDesktop1
                  : null
              }) center center / cover no-repeat`,
            }}
            role="img"
            aria-label="Gallery image"
          />
          <div
            className="gallery_left-image2"
            style={{
              background: `url(${
                isMobile
                  ? imageGalleryMobile2
                  : isTablet
                  ? imageGalleryTablet2
                  : isDesktop
                  ? imageGalleryDesktop2
                  : null
              }) center center / cover no-repeat`,
            }}
            role="img"
            aria-label="Gallery image-"
          />
        </div>

        <div
          className="gallery-image3"
          style={{
            background: `url(${
              isMobile
                ? imageGalleryMobile3
                : isTablet
                ? imageGalleryTablet3
                : isDesktop
                ? imageGalleryDesktop3
                : null
            }) center center / cover no-repeat`,
          }}
          role="img"
          aria-label="Gallery image"
        />
      </div>

      {/* Aslo Like*/}
      <div className="aslolike">
        <H5>You may aslo like</H5>
        <div className="aslolike_container">
          <div className="aslolike_container-productone">
            <div className="container-image">
              <img
                src={
                  isMobile
                    ? asloLikeMobile1
                    : isTablet
                    ? asloLikeTablet1
                    : isDesktop
                    ? asloLikeDesktop1
                    : null
                }
                alt="Image Aslo Like"
              />
            </div>

            <H5 className="aslolike-title">XX99 Mark I</H5>
            <Button primary>See Product</Button>
          </div>
          <div className="aslolike_container-producttwo">
            <div className="container-image">
              <img
                src={
                  isMobile
                    ? asloLikeMobile2
                    : isTablet
                    ? asloLikeTablet2
                    : isDesktop
                    ? asloLikeDesktop2
                    : null
                }
                alt="Image Aslo Like"
              />
            </div>

            <H5 className="aslolike-title">XX99 Mark I</H5>
            <Button primary>See Product</Button>
          </div>
          <div className="aslolike_container-productthree">
            <div className="container-image">
              <img
                src={
                  isMobile
                    ? asloLikeMobile3
                    : isTablet
                    ? asloLikeTablet3
                    : isDesktop
                    ? asloLikeDesktop3
                    : null
                }
                alt="Image Aslo Like"
              />
            </div>

            <H5 className="aslolike-title">XX99 Mark I</H5>
            <Button primary>See Product</Button>
          </div>
        </div>
      </div>
      {/*  Import Component */}
      <Categories />
      <BestGear />
    </section>
  );
};

export default ProductPage;
