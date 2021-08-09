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

// ==> Import Component
import ModalRemoveProduct from './ModalRemoveProduct';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// ==> Recoil
import { useSetRecoilState, useResetRecoilState, useRecoilState } from 'recoil';

import {
  statusCartComponent,
  cartValue,
  exitAnimation,
} from '../../Recoil/index';

// --> COMPONENT
const ModalCart = () => {
  // ==> Media Querries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // ==> State Recoil
  const closeCart = useSetRecoilState(statusCartComponent);
  const resetCart = useResetRecoilState(cartValue);
  const [cart, setCart] = useRecoilState(cartValue);

  // ==> Close modalCart with animation
  const [playExitAnimation, SetPlayExitAnimation] =
    useRecoilState(exitAnimation);

  const handlerOnClickModal = (evt: any) => {
    if (
      evt.target.className === 'container-modalcart container-large' ||
      evt.target.className === 'modal' ||
      evt.target.closest('.navbar_button-cart')
    ) {
      SetPlayExitAnimation(true);

      setTimeout(() => {
        SetPlayExitAnimation(false);
        closeCart(false);
      }, 400);
    }
  };

  // ==> Change the quantity of product
  let [modifiedQuantity, setModifiedQuantity] = useState(0);
  let [activeModalRemove, setActiveModalRemove] = useState(false);
  let [slugTargetModal, setSlugTargetModal] = useState('');
  const addProduct = (slug: string, modifier: string) => {
    setModifiedQuantity((modifiedQuantity += 1));
    const newCart = cart.map((product) => {
      if (product.slug === slug) {
        if (product.quantity === 1 && modifier === 'moins') {
          setSlugTargetModal(product.slug);
          setActiveModalRemove(true);

          return product;
        }
        return {
          ...product,
          quantity:
            modifier === 'plus'
              ? product.quantity + modifiedQuantity
              : product.quantity - modifiedQuantity,
        };
      } else {
        return product;
      }
    });
    setCart([...newCart]);
    setModifiedQuantity(0);
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
                  {/* Modal RemoveProduct*/}
                  {activeModalRemove && slugTargetModal === item.slug && (
                    <ModalRemoveProduct
                      closeModal={setActiveModalRemove}
                      slug={item.slug}
                    />
                  )}
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
                    <button
                      className="number-button--minus"
                      onClick={() => {
                        addProduct(item.slug, 'moins');
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="number-button--plus"
                      onClick={() => {
                        addProduct(item.slug, 'plus');
                      }}
                    >
                      +
                    </button>
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
