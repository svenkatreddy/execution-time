import prettyHrtime from 'pretty-hrtime';

type Logger = (...data: any) => any;

interface Performance {
  startAt?: [number, number];
  logger?: Logger
}

const performances: { [name: string]: Performance } = {};

const start = (logger?: Logger) => (name = 'default') => {
  performances[name] = {
    startAt: process.hrtime(),
    logger
  };
};

const stop = (logger?: Logger) => (name = 'default') => {
  const startAt = performances[name]?.startAt;
  if (!startAt) {
    throw new Error(`Namespace: ${name} doesnt exist`);
  }
  
  const diff = process.hrtime(startAt);
  const time = diff[0] * 1e3 + diff[1] * 1e-6;
  const words = prettyHrtime(diff);
  const preciseWords = prettyHrtime(diff, { precise: true });
  const verboseWords = prettyHrtime(diff, { verbose: true });
  const log = logger ?? performances[name].logger;

  if (log) {
    log('Total Time:' + time);
  }

  return {
    name,
    time,
    words,
    preciseWords,
    verboseWords
  };
}

export const performance = (logger?: Logger) => {
  return {
    start: start(logger),
    stop: stop(logger)
  }
};

export default performance;
