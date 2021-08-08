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

// Import React Router
import { Link } from 'react-router-dom';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// Import Component
import Categories from 'src/components/Categories';
import BestGear from 'src/components/BestGear';

// Typescript Props
interface Props {
  slug: string;
  new: boolean;
  name: string;
  description: string;
  price: number;
  features: string;
  includes: [
    {
      quantity: string;
      item: string;
    },
  ];

  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  gallery: {
    first: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    second: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    third: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  };
  others: [
    {
      name: string;
      slug: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    },
  ];
}

// ==> Recoil
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  statusCartComponent,
  productNumber,
  cartValue,
} from '../../Recoil/index';

// --> COMPONENT
const Product = ({
  slug,
  new: novelty,
  name,
  description,
  price,
  features,
  includes,
  image: {
    mobile: productImageMobile,
    tablet: productImageTablet,
    desktop: productImageDesktop,
  },
  gallery: {
    first: {
      mobile: galleryFirstImageMobile,
      tablet: galleryFirstImageTablet,
      desktop: galleryFirstImageDesktop,
    },
    second: {
      mobile: gallerySecondImageMobile,
      tablet: gallerySecondImageTablet,
      desktop: gallerySecondImageDesktop,
    },
    third: {
      mobile: galleryThirdImageMobile,
      tablet: galleryThirdImageTablet,
      desktop: galleryThirdImageDesktop,
    },
  },
  others,
}: Props) => {
  // Media Querries Rules
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1124px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  // State Recoil ==>
  let [numberProduct, setNumberProduct] = useRecoilState(productNumber);
  let [cart, setCart] = useRecoilState(cartValue);
  const openModulCart = useSetRecoilState(statusCartComponent);

  // prevent negative value ==>
  numberProduct < 0 ? setNumberProduct(0) : numberProduct;

  const addProductToCart = () => {
    if (numberProduct > 0) {
      setCart([
        ...cart,
        {
          slug,
          name,
          price,
          quantity: numberProduct,
        },
      ]);
      setNumberProduct(0);
      openModulCart(true);
    }
  };
  // RETURN ==>
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
                ? require(`src/assets/img/${productImageMobile}.jpg`).default
                : isTablet
                ? require(`src/assets/img/${productImageTablet}.jpg`).default
                : isDesktop
                ? require(`src/assets/img/${productImageDesktop}.jpg`).default
                : null
            }
            alt="Product Image"
          />
        </div>

        <div className="product_description">
          {novelty && (
            <OverlineText className="overline" color="#d87d4a">
              New Product
            </OverlineText>
          )}
          <H4 className="title">{name}</H4>
          <Body className="body" color="#8c8c8c">
            {description}
          </Body>
          <H6>{`$ ${price}`}</H6>
          <ButtonShop className="buttonshop">
            <button
              className="buttonshop-button"
              onClick={() => setNumberProduct((numberProduct -= 1))}
            >
              -
            </button>
            {numberProduct}
            <button
              className="buttonshop-button"
              onClick={() => setNumberProduct((numberProduct += 1))}
            >
              +
            </button>
          </ButtonShop>
          <Button onClick={addProductToCart} primary>
            Add to cart
          </Button>
        </div>
      </div>
      {/* PRODUCT FEATURES */}
      <div className="container_box-features">
        <div className="features">
          <H5 className="features-title">Features</H5>
          <Body color="#8c8c8c">{features}</Body>
        </div>

        {/* PRODUCT BOX */}
        <div className="box">
          <H5 className="box-title">In the box</H5>
          <div className="box-content">
            {includes.map((include) => (
              <Body className="box-content--body" color="#8c8c8c">
                <span className="box-content--span">{include.quantity} </span>{' '}
                {include.item}
              </Body>
            ))}
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
                  ? require(`src/assets/img/${galleryFirstImageMobile}.jpg`)
                      .default
                  : isTablet
                  ? require(`src/assets/img/${galleryFirstImageTablet}.jpg`)
                      .default
                  : isDesktop
                  ? require(`src/assets/img/${galleryFirstImageDesktop}.jpg`)
                      .default
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
                  ? require(`src/assets/img/${gallerySecondImageMobile}.jpg`)
                      .default
                  : isTablet
                  ? require(`src/assets/img/${gallerySecondImageTablet}.jpg`)
                      .default
                  : isDesktop
                  ? require(`src/assets/img/${gallerySecondImageDesktop}.jpg`)
                      .default
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
                ? require(`src/assets/img/${galleryThirdImageMobile}.jpg`)
                    .default
                : isTablet
                ? require(`src/assets/img/${galleryThirdImageTablet}.jpg`)
                    .default
                : isDesktop
                ? require(`src/assets/img/${galleryThirdImageDesktop}.jpg`)
                    .default
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
          {others.map((otherProduct) => (
            <div className="aslolike_container-product">
              <div className="container-image">
                <img
                  src={
                    isMobile
                      ? require(`src/assets/img/${otherProduct.image.mobile}.jpg`)
                          .default
                      : isTablet
                      ? require(`src/assets/img/${otherProduct.image.tablet}.jpg`)
                          .default
                      : isDesktop
                      ? require(`src/assets/img/${otherProduct.image.desktop}.jpg`)
                          .default
                      : null
                  }
                  alt="Image Aslo Like"
                />
              </div>

              <H5 className="aslolike-title">{otherProduct.name}</H5>
              <Link to={`/product/${otherProduct.slug}`}>
                <Button primary>See Product</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/*  Import Component */}
      <Categories />
      <BestGear />
    </section>
  );
};

export default Product;
