import { atom, selector } from "recoil";

/*--------------------------------
            INITIAL DATA
-----------------------------------*/
export const initialData = atom({
  key: 'initialData',
  default: [],
})

// ==> Value use to Filter
export const filterValue = atom({
  key: 'filterValue',
  default: '',
})

// ==> Filter Category
export const categoryFilter = selector({
  key: 'categoryFilter',
  get: ({get}) => {
  const filter = get(filterValue);
  const data = get(initialData);

  return data.filter((products) => products.category === filter)
}
})

// ==> Filter Product
export const productFilter = selector({
  key: 'productFilter',
  get: ({get}) => {
  const filter = get(filterValue);
  const data = get(initialData);

  return data.filter((product) => product.slug === filter)
}
})

/*--------------------------------
             CART
-----------------------------------*/

// ==> active Modal Cart
export const statusCartComponent = atom({
  key: 'statusCartComponent',
  default: false,
})

//==> Product Number
export const productNumber = atom({
  key: 'productNumber',
  default: 0,
})

// ==> Cart
export const cartValue = atom({
  key: 'cart',
  default: [],
})

// ==> Boolean to play exit Animation Cart
export const exitAnimation = atom({
  key: 'exitAnimation',
  default: false,
}) 

export const totalCart = atom({
  key: 'totalCart',
  default: 0
})

/*----------------------------------
             CHECKOUT
-----------------------------------*/
export interface User {
  name? : string;
  email? : string;
  phone? : number | string;
  adress? : string;
  zipCode? : number | string;
  city? : string;
  country? : string;
  payment? : string;
}

export const user = atom({
  key: 'user',
  default: {
  name: '',
  email: '',
  phone: '',
  adress: '',
  zipCode: '',
  city: '',
  country: '',
  payment: '',
} as User,
})

/*----------------------------------
            Thanks Message
-----------------------------------*/
export const modalThanksMessage = atom({
  key: 'modalThanksMessage',
  default: false,
})
