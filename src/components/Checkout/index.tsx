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

// Import Librairie
import { useMediaQuery } from 'react-responsive';

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

const Checkout = () => {
  // ==> Media Querries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // RETURN ==>
  return (
    <section className="container-checkout">
      <div className="container container-large">
        <Body className="goback" color="#8c8c8c">
          Go Back
        </Body>
        <div className="container-flex">
          {/* CHECKOUT*/}
          <div className="checkout">
            <H4>Checkout</H4>
            {/* CHECKOUT_detail*/}
            <div className="checkout_detail">
              <SubText color="#d87d4a">Billing Details</SubText>
              <div className="checkout_detail-flex">
                <div className="checkout_detail-flex--name">
                  <Label htmlFor="name">Name</Label>
                  <Textfield id="name" name="name" type="text" required />
                </div>
                <div className="checkout_detail-flex--email">
                  <Label htmlFor="email">Email Adress</Label>
                  <Textfield id="email" name="email" type="email" required />
                </div>
                <div className="checkout_detail-flex--phone">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Textfield id="phone" name="phone" type="tel" />
                </div>
              </div>
            </div>
            {/* CHECKOUT_info*/}
            <div className="checkout_info">
              <SubText color="#d87d4a">Shipping info</SubText>
              <div className="checkout_detail-adress">
                <Label htmlFor="adress">Your Adress</Label>
                <Textfield id="adress" name="adress" type="text" required />
              </div>
              <div className="checkout_info-flex">
                <div className="checkout_info-flex--zipcode">
                  <Label htmlFor="zipcode">Zip Code</Label>
                  <Textfield
                    id="zipcode"
                    name="zipCode"
                    type="number"
                    required
                  />
                </div>
                <div className="checkout_info-flex--city">
                  <Label htmlFor="city">City</Label>
                  <Textfield id="city" name="city" type="text" />
                </div>
                <div className="checkout_info-flex--country">
                  <Label htmlFor="country">Country</Label>
                  <Textfield id="country" name="country" type="text" />
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
                    />
                    Paypal
                  </DivRadio>
                  <DivRadio>
                    <Radio
                      type="radio"
                      id="payment"
                      name="payment"
                      value="cb"
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
              <div className="summary_item">
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
              <H6>$ 5,396</H6>
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
              <H6 color="#d87d4a">$ 5,446</H6>
            </div>
            <Button className="summary_button-pay" primary>
              Continue & pay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
