import { CREATE_ASSETS } from '../type';

export const createAssets = data => async dispatch => {
  dispatch({
    type: CREATE_ASSETS,
    payload: data,
  });
};

const AssetActions = {
  createAssets,
};

export default AssetActions;
