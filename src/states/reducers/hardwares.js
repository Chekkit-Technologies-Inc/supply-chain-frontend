import { CREATE_HARDWARE, ADD_RFID_PINS } from '../type';

const initialState = [];

const hardwaresReducer = (hardwares = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HARDWARE:
      return payload;
    case ADD_RFID_PINS:
      return payload;
    default:
      return hardwares;
  }
};

export default hardwaresReducer;
