import truck from './assets/truck.svg';
import sticker from './assets/sticker.png';

export const appData = {
  name: 'Chekkit',
  description: 'Asset management',
};

export const setupData = {
  pickManagement: {
    title: 'What do you intend to use the Chekkit asset management tool for:',
    buttonText: 'Next',
    data: [
      {
        icon: truck,
        title: 'Asset Management And Tracking',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lorem qconvallis tellus rutrum in. Proin vitae tristique ante, non venenati',
      },
      {
        icon: truck,
        title: 'Inventory Management ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lorem qconvallis tellus rutrum in. Proin vitae tristique ante, non venenati',
      },
    ],
  },
  setupWarehouse: {
    title: 'Set Up Warehouse',
    buttonText1: 'Back',
    buttonText2: 'Continue',
  },
  wareHouseMap: {
    title: 'All Warehouses You Have Added',
    buttonText1: 'Back',
    buttonText2: 'Continue',
  },
  setupHardware: {
    title: 'Set Up Hardware',
    description: 'Welcome to Chekkit Asset Management App. Get Started By Setting Up Your Hardware Devices',
    data: [
      {
        title: 'Chekkit RFID',
        icon: sticker,
        count: 0,
      },
      {
        title: 'Sticker Printer',
        icon: sticker,
        count: 0,
      },
      {
        title: 'Sticker Labels',
        icon: sticker,
        count: 0,
      },
    ],
    buttonText: 'Next',
  },
};
