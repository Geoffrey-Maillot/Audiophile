// Import React
import React from 'react';

// Import Style
import './styles.scss';
import {
  H6,
  H4,
  H5,
  Button,
  SubText,
  OverlineText,
  Body,
  Label,
  Textfield,
  DivRadio,
  Radio,
} from 'src/styles/styledComponents';

// Import React Router
import { useHistory } from 'react-router-dom';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// ==> Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  cartValue,
  totalCart,
  user,
  modalThanksMessage,
} from '../../Recoil/index';

const Checkout = () => {
  // ==> Media Querries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // State Recoil
  const cart = useRecoilValue(cartValue);
  const total = useRecoilValue(totalCart);
  const setNewUser = useSetRecoilState(user);
  const newUser = useRecoilValue(user);

  // control field
  const handlerOnChange = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const openModalThanks = useSetRecoilState(modalThanksMessage);
  const handlerOnSubmit = (evt: any) => {
    evt.preventDefault();
    openModalThanks(true);
  };

  // ==> Go Back
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  // RETURN ==>
  return (
    <section className="container-checkout">
      <div className="container container-large">
        <button
          type="button"
          style={{ border: 'none', backgroundColor: 'transparent' }}
          onClick={goBack}
        >
          <Body className="goback" color="#8c8c8c">
            Go Back
          </Body>
        </button>
        <form
          className="container-flex"
          onSubmit={(evt) => handlerOnSubmit(evt)}
        >
          {/* CHECKOUT*/}
          <div className="checkout">
            <H4>Checkout</H4>
            {/* CHECKOUT_detail*/}
            <div className="checkout_detail">
              <SubText color="#d87d4a">Billing Details</SubText>
              <div className="checkout_detail-flex">
                <div className="checkout_detail-flex--name">
                  <Label htmlFor="name">Name</Label>
                  <Textfield
                    id="name"
                    name="name"
                    type="text"
                    value={newUser.name}
                    required
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
                <div className="checkout_detail-flex--email">
                  <Label htmlFor="email">Email Adress</Label>
                  <Textfield
                    id="email"
                    name="email"
                    type="email"
                    value={newUser.email}
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
                <div className="checkout_detail-flex--phone">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Textfield
                    id="phone"
                    name="phone"
                    type="tel"
                    value={newUser.phone}
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* CHECKOUT_info*/}
            <div className="checkout_info">
              <SubText color="#d87d4a">Shipping info</SubText>
              <div className="checkout_detail-adress">
                <Label htmlFor="adress">Your Adress</Label>
                <Textfield
                  id="adress"
                  name="adress"
                  type="text"
                  value={newUser.adress}
                  onChange={(evt) => {
                    handlerOnChange(evt);
                  }}
                />
              </div>
              <div className="checkout_info-flex">
                <div className="checkout_info-flex--zipcode">
                  <Label htmlFor="zipcode">Zip Code</Label>
                  <Textfield
                    id="zipcode"
                    name="zipCode"
                    type="number"
                    value={newUser.zipCode}
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
                <div className="checkout_info-flex--city">
                  <Label htmlFor="city">City</Label>
                  <Textfield
                    id="city"
                    name="city"
                    type="text"
                    value={newUser.city}
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
                <div className="checkout_info-flex--country">
                  <Label htmlFor="country">Country</Label>
                  <Textfield
                    id="country"
                    name="country"
                    type="text"
                    value={newUser.country}
                    onChange={(evt) => {
                      handlerOnChange(evt);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* PAYMENT-DETAILS*/}
            <div className="checkout_payment">
              <SubText color="#d87d4a">Payment Details</SubText>
              <div className="checkout_payment-flex">
                <div className="checkout_payment-flex--method">
                  <Label htmlFor="payment">Payment Method</Label>
                </div>
                <div className="checkout_payment-flex--radio">
                  <DivRadio>
                    <Radio
                      type="radio"
                      id="payment"
                      name="payment"
                      value="paypal"
                      onChange={(evt) => {
                        handlerOnChange(evt);
                      }}
                    />
                    Paypal
                  </DivRadio>
                  <DivRadio>
                    <Radio
                      type="radio"
                      id="payment"
                      name="payment"
                      value="cb"
                      onChange={(evt) => {
                        handlerOnChange(evt);
                      }}
                    />
                    CB
                  </DivRadio>
                </div>
              </div>
            </div>
          </div>
          <div className="summary">
            <H5>Summary</H5>
            {cart.map((item) => (
              <div className="summary_item" key={item.slug}>
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
                <Body
                  color="#808080"
                  className="quantity"
                >{`x${item.quantity}`}</Body>
              </div>
            ))}
            <div className="summary_total">
              <OverlineText>Total</OverlineText>
              <H6>$ {total}</H6>
            </div>
            <div className="summary_shipping">
              <OverlineText>Shipping</OverlineText>
              <H6>$ 50</H6>
            </div>
            <div className="summary_vat">
              <OverlineText>VAT (Included)</OverlineText>
              <H6>$ 1079</H6>
            </div>
            <div className="summary_grand-total">
              <OverlineText>Grand Total</OverlineText>
              <H6 color="#d87d4a">{`$ ${total + 50}`}</H6>
            </div>
            <Button
              type="submit"
              className="summary_button-pay"
              primary
              onSubmit={(evt) => handlerOnSubmit(evt)}
            >
              Continue & pay
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
