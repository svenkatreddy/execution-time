import executionTime from '../lib';
const performance = executionTime(console.info);

performance.start();
setTimeout(() => {
  performance.stop();
}, 1000);