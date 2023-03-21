import http from '../http';

export const retrieveProducts = async () => {
  return http().get(`/appmodule`);
};

const ProductService = {
  retrieveProducts,
};

export default ProductService;
