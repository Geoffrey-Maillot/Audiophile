// Import React
import React from 'react';

// ==> Import React router
import { useHistory } from 'react-router';

// Import React Icon
import { GoCheck } from 'react-icons/go';

// Import Style
import './styles.scss';
import { H4, H6, Button, SubText, Body } from 'src/styles/styledComponents';

// ==> Import Recoil
import {
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil';
import { statusCartComponent } from '../../Recoil/index';
import {
  cartValue,
  modalThanksMessage,
  totalCart,
  user,
} from '../../Recoil/index';

// --> COMPONENT
const ThanksMessage = () => {
  const cart = useRecoilValue(cartValue);
  const closeModal = useSetRecoilState(modalThanksMessage);
  const total = useRecoilValue(totalCart);
  const name = useRecoilValue(user).name;
  const resetCart = useResetRecoilState(cartValue);

  // => prevent Open Cart
  const [statusModalCart, setStatusModalCart] =
    useRecoilState(statusCartComponent);
  if (statusModalCart) setStatusModalCart(false);

  // ==> Reset and Redirect
  const history = useHistory();
  const handlerOnClick = () => {
    closeModal(false);
    resetCart();
    history.push('/');
  };

  return (
    <div className="modal">
      <div className="thanks-message">
        <div className="thanks-message_circle">
          <GoCheck size="2em" color="#fff" />
        </div>
        <H4 className="thanks-message_text">
          Thank you <br /> for your order{' '}
          <span>
            <H6
              color="#d87d4a"
              style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {name}
            </H6>
          </span>
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
              <H6 color="#fff">{`$ ${total + 50}`}</H6>
            </div>
          </div>
        </div>

        <Button className="home" primary type="button" onClick={handlerOnClick}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default ThanksMessage;
