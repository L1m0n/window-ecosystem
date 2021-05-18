const AM2330 = import('../am2320');
import BH1750 from 'bh1750';
console.log(BH1750);
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