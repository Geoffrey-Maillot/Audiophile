import { atom, selector } from "recoil";

// ==> Initial Data
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

