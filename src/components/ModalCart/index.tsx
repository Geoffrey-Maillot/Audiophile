// Import React
import React, { useState } from 'react';

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

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// ==> Recoil
import {
  useSetRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useRecoilState,
} from 'recoil';
import { exitAnimation } from '../../Recoil/index';

import {
  statusCartComponent,
  productNumber,
  cartValue,
} from '../../Recoil/index';

// --> COMPONENT
const ModalCart = () => {
  // ==> Media Querries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // State Recoil ==>
  // Close Cart
  const closeCart = useSetRecoilState(statusCartComponent);

  // Reset Cart
  const resetCart = useResetRecoilState(cartValue);

  const cart = useRecoilValue(cartValue);

  // Animation Close
  const [playExitAnimation, SetPlayExitAnimation] =
    useRecoilState(exitAnimation);

  const handlerOnClickModal = (evt: any) => {
    if (
      evt.target.className === 'container-modalcart container-large' ||
      evt.target.className === 'modal' ||
      evt.target.closest('.navbar_button-cart')
    ) {
      console.dir(evt.target);
      SetPlayExitAnimation(true);

      setTimeout(() => {
        SetPlayExitAnimation(false);
        closeCart(false);
      }, 400);
    }
  };
  // RETURN ==>
  return (
    <div className="modal" onClick={(evt) => handlerOnClickModal(evt)}>
      <div className="container-modalcart container-large">
        <div
          className={`modalcart bounce-in-top ${
            playExitAnimation && 'slide-out-top'
          }`}
        >
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
              <H6>Votre panier est vide</H6>
            </div>
          ) : (
            <>
              <div className="modalcart_header">
                <H5>Cart ({cart.length})</H5>
                <button
                  className="remove"
                  color="#808080"
                  type="button"
                  onClick={resetCart}
                >
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
                        <Body className="item_description-name">
                          {item.name}
                        </Body>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
