import truck from './assets/truck.svg';
import inventory from './assets/inventory.svg';
import rfid from './assets/rfid.svg';
import printer from './assets/printer.svg';
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
        icon: inventory,
        title: 'Inventory Management ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lorem qconvallis tellus rutrum in. Proin vitae tristique ante, non venenati',
      },
    ],
  },
  pickPlan: [
    {
      title: 'Free Trial',
      amount: '0',
      duration: 'first 3 months',
      buttonText: 'ChoosePlan',
      desc: 'to the all features for the',
    },
    {
      title: 'Quarterly',
      amount: '30',
      duration: '3 months',
      buttonText: 'ChoosePlan',
      desc: 'to the signal room for the',
    },
    {
      title: 'Yearly',
      amount: '30',
      duration: '12 months',
      buttonText: 'ChoosePlan',
      desc: 'to the all features for the',
    },
  ],
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
        icon: rfid,
        count: 0,
      },
      {
        title: 'Sticker Printer',
        icon: printer,
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
  activateHardware: {
    description: 'Delivery of the cards will take up to three days. Please enter the neccessary details',
    buttonText: 'Proceed To Activate',
  },
};
