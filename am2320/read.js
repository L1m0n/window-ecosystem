import i2c from 'i2c-bus';
import getData from './get-data.js';

const read = async busNumber => {
  const bus = await i2c.openPromisified(busNumber);
  const data = await getData(bus);
  await bus.close();
  return data;
};

export default read;
