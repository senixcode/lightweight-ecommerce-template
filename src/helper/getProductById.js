import products from "./TestData";
console.log(products);
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};
