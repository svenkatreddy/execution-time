"use strict";

const performance = (logInstance) => {
  let startAt;
  return {
    start: () => {
      startAt = process.hrtime();
    },
    stop: () => {
      const diff = process.hrtime(startAt);
      const time = diff[0] * 1e3 + diff[1] * 1e-6;
      if(logInstance) {
        logInstance(time);
      }
      return time;
    }
  }
};

module.exports = performance;