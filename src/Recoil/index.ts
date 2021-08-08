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