const AM2330 = require('../vendors/am2320');
const BH1750 = require('bh1750');

const light = new BH1750();

const BUS_NUMBER = 1;

export default () => {
  return Promise.all([
      AM2330.read(BUS_NUMBER),
      new Promise(((resolve, reject) => {
          light.readLight((error, value) => {
              if (error) {
                  reject(error);
              } else {
                  resolve(value);
              }
          });
      })),
  ]);
};