import React from 'react';

// ==> React Icon
import { HiOutlineX } from 'react-icons/hi';
import { HiOutlineCheck } from 'react-icons/hi';

// Import Style
import './styles.scss';
import { H6 } from 'src/styles/styledComponents';
import { useRecoilState } from 'recoil';
import { cartValue } from '../../Recoil/index';

// Props Typescript
interface Props {
  closeModal: any;
  slug: string;
}

const ModalRemoveProduct = ({ closeModal, slug }: Props) => {
  const [cart, setCart] = useRecoilState(cartValue);

  const removeProduct = () => {
    const newCart = cart.filter((product) => product.slug !== slug);
    setCart([...newCart]);
  };

  return (
    <div className="modal-remove-product slide-in-fwd-center">
      {/* notRemove */}
      <button onClick={() => closeModal(false)}>
        <HiOutlineX />
      </button>
      {/* Remove */}
      <H6>Supprimer ?</H6>
      <button onClick={removeProduct}>
        <HiOutlineCheck />
      </button>
    </div>
  );
};

export default ModalRemoveProduct;
