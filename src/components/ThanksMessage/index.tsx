// Import React
import React from 'react';

// Import React Icon
import { GoCheck } from 'react-icons/go';

// Import Style
import './styles.scss';
import {
  H4,
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
    name: 'XX99 MK',
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
const ThanksMessage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="modal">
      <div className="thanks-message">
        <div className="thanks-message_circle">
          <GoCheck size="2em" color="#fff" />
        </div>
        <H4 className="thanks-message_text">
          Thank you <br /> for your order
        </H4>
        <div className="thanks-message_product">
          <Body color="#808080">
            You will receive an email confirmation shortly.
          </Body>
          <div className="product-container-flex">
            <div className="product_item">
              <div className="item">
                <div className="item_img">
                  <img
                    src={
                      require(`src/assets/img/cart/image-${cart[0].slug}.jpg`)
                        .default
                    }
                    alt={cart[0].slug}
                  />
                </div>

                <div className="item_description">
                  <Body className="item_description-name">{cart[0].name}</Body>

                  <SubText color="#808080">$ {cart[0].price}</SubText>
                </div>
              </div>
              <Body
                color="#808080"
                className="quantity"
              >{`x${cart[0].quantity}`}</Body>
              <div className="other-container">
                <div className="other">
                  <Body className="other_text">
                    and {cart.length - 1} other item(s)
                  </Body>
                </div>
              </div>
            </div>

            <div className="total">
              <Body className="total_text" color="#7f7f7f">
                Grand Total
              </Body>
              <H6 color="#fff">€ 5,5446</H6>
            </div>
          </div>
        </div>

        <Button className="home" primary>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default ThanksMessage;
