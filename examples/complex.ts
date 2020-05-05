import executionTime from '../lib';
import complex2 from './complex-2';

const performance = executionTime(console.info);

performance.start('venkat');
performance.start('reddy');

complex2();