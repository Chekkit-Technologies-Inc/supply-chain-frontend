import { CREATE_ASSETS } from '../type';

const initialState = [];

const assetsReducer = (assets = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ASSETS:
      const assetList = payload.filter(asset => {
        return asset.asset_name;
      });
      return [...assets, ...assetList];
    default:
      return assets;
  }
};

export default assetsReducer;
