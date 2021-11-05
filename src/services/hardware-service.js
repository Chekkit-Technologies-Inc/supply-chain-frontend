import http from '../http';

export const createHardware = async data => {
  return http().post('/hardware', data);
};

export const registerRfid = async data => {
  return http().post(`/rfid`, data);
};

const HardwareService = {
  createHardware,
  registerRfid,
};

export default HardwareService;
