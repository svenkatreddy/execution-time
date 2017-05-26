"use strict";

const prettyHrtime = require('pretty-hrtime');

const performance = (logInstance) => {
  let startAt;
  return {
    start: () => {
      startAt = process.hrtime();
    },
    stop: () => {
      const diff = process.hrtime(startAt);
      const time = diff[0] * 1e3 + diff[1] * 1e-6;
      const words = prettyHrtime(diff);
      const preciseWords = prettyHrtime(diff, {precise:true});
      const verboseWords = prettyHrtime(diff, {verbose:true});
      if (logInstance) {
        logInstance('Total Time:' + time);
      }
      
      return { 
        time: time,
        words: words,
        preciseWords: preciseWords,
        verboseWords: verboseWords
      };
    }
  }
};

module.exports = performance;