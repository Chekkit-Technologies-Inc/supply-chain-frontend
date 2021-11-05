export default class Assets {
  constructor(asset_name = '', asset_price = '', batch_number = '', category = '', date_installed = '', sticker_id = '') {
    this.asset_name = asset_name;
    this.asset_price = asset_price;
    this.batch_number = batch_number;
    this.category = category;
    this.date_installed = date_installed;
    this.sticker_id = sticker_id;
  }
}
