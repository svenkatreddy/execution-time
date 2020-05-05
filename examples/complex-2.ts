import executionTime from '../lib';

const performance = executionTime(console.info);

export default () => {
  setTimeout(() => {
    performance.stop('reddy');
  }, 2000);
  setTimeout(() => {
    performance.stop('venkat');
  }, 3000);
};
