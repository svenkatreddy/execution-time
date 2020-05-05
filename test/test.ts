import anyTest, { TestInterface } from 'ava';
import sinon from 'sinon';
import executionTime from '../lib';

interface Performance {
  start: (name?: string) => void;
  stop: (name?: string) => {
    name: string;
    time: number;
    words: string;
    preciseWords: string;
    verboseWords: string;
  };
}

const test = anyTest as TestInterface<{ logStub: sinon.SinonStub<any[], any>, performance: Performance }>;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.beforeEach(t => {
  const logStub = sinon.stub();
  const performance = executionTime(logStub);
  t.context = {
    logStub,
    performance
  };
});

test('start should be a method', t => {
  t.is(typeof t.context.performance.start, 'function');
});

test('stop should be a method', t => {
  t.is(typeof t.context.performance.stop, 'function');
});

test('should return log time', async t => {
  t.context.performance.start();
  await delay(10);
  t.true(t.context.performance.stop().time >= 10);
});

test('should return log time for a named', async t => {
  t.context.performance.start('venkat');
  await delay(20);
  t.true(t.context.performance.stop('venkat').time >= 20);
});

test('should return words', async t => {
  t.context.performance.start();
  await delay(10);

  const result = t.context.performance.stop();
  t.truthy(result.time);
  t.truthy(result.words);
  t.truthy(result.preciseWords);
  t.truthy(result.verboseWords);
});

test('should return words for a named', async t => {
  t.context.performance.start('venkat');
  await delay(20);

  const result = t.context.performance.stop('venkat');
  t.truthy(result.time);
  t.truthy(result.words);
  t.truthy(result.preciseWords);
  t.truthy(result.verboseWords);
});