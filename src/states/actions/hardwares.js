import { CREATE_HARDWARE, ADD_RFID_PINS } from '../type';
import { HardwareService } from '../../services';
import { notify, loading } from './response';

export const createHardware = data => async dispatch => {
  dispatch(loading({ loading: true }));
  let list = {
    hardwares: data,
  };
  try {
    const res = await HardwareService.createHardware(list);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: CREATE_HARDWARE,
      payload: res.data.data,
    });
    return Promise.resolve(res.data.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const addRfidPins = data => async dispatch => {
  dispatch({
    type: ADD_RFID_PINS,
    payload: data,
  });
};

export const registerRfid = data => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await HardwareService.registerRfid(data);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    return Promise.resolve(res);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

const HardwareActions = {
  createHardware,
  addRfidPins,
  registerRfid,
};

export default HardwareActions;
