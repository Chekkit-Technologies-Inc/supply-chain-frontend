import http from '../http';

export const retrieveProducts = async () => {
  return http().get(`/products`);
};

const ProductService = {
  retrieveProducts,
};

export default ProductService;
