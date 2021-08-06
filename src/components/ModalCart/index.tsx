// Import React
import React from 'react';

// Import Style
import './styles.scss';

import {
  H5,
  OverlineText,
  H6,
  Button,
  ButtonShop,
  SubText,
  Body,
} from 'src/styles/styledComponents';

const cart = [
  {
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 MK II',
    price: 2999,
    quantity: 1,
  },
  {
    slug: 'xx59-headphones',
    name: 'XX59',
    price: 899,
    quantity: 2,
  },
  {
    slug: 'yx1-earphones',
    name: 'YX1',
    price: 599,
    quantity: 1,
  },
];
// Import Librairie
import { useMediaQuery } from 'react-responsive';

// --> COMPONENT
const ModalCart = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="modal">
      <div className=" container-modalcart container-large">
        <div className="modalcart">
          <div className="modalcart_header">
            <H5>Cart ({cart.length})</H5>
            <button className="remove" color="#808080">
              Remove all
            </button>
          </div>
          {cart.map((item) => (
            <div className="modalcart_item">
              <div className="item">
                <div className="item_img">
                  <img
                    src={
                      require(`src/assets/img/cart/image-${item.slug}.jpg`)
                        .default
                    }
                    alt={item.slug}
                  />
                </div>

                <div className="item_description">
                  {isMobile && (
                    <Body className="item_description-name">{item.name}</Body>
                  )}
                  {!isMobile && (
                    <H6 className="item_description-name">{item.name}</H6>
                  )}
                  <SubText color="#808080">$ {item.price}</SubText>
                </div>
              </div>
              <ButtonShop className="number-button">
                <button className="number-button--minus">-</button>
                {item.quantity}
                <button className="number-button--plus">+</button>
              </ButtonShop>
            </div>
          ))}

          <div className="modalcart_total">
            <OverlineText>Total</OverlineText>
            <H6>$ 5,396</H6>
          </div>
          <Button primary className="modalcart_checkout">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
