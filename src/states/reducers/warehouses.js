import { CREATE_WAREHOUSE, FETCH_WAREHOUSES } from '../type';

const initialState = [];

const warehousesReducer = (warehouses = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_WAREHOUSE:
      return [...warehouses, ...payload];
    case FETCH_WAREHOUSES:
      return payload;
    default:
      return warehouses;
  }
};

export default warehousesReducer;
