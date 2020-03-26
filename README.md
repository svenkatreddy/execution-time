# execution-time

[![Build Status](https://travis-ci.org/svenkatreddy/execution-time.svg?branch=master)](https://travis-ci.org/svenkatreddy/execution-time)

[![NPM](https://nodei.co/npm/execution-time.png?stars=true)](https://nodei.co/npm/execution-time/)

node.js utility to measure execution time in code

## Install
```shell
npm install execution-time --save
```

## Usage
```js
const perf = require('execution-time')();

// At beginning of your code
perf.start();

// At end of your code
const results = perf.stop();
console.log(results.time);  // in milliseconds
```

### Named performance measurer
```js
const perf = require('execution-time')();

// At beginning of your code, pass any name
perf.start('apiCall');

// At end of your code, pass the same name (anywhere in your flow)
const results = perf.stop('apiCall');
console.log(results.time);  // in milliseconds
console.log(results.preciseWords);  // in words


```

### If you dont care about results but just want to print results

Sample usage with debug
```js
const debug = require('debug')('your-module');
const perf = require('execution-time')(debug);

// At beginning of your code
perf.start();

// At end of your code
perf.stop();

```

also works with console.log/info/warn

```js
const perf = require('execution-time')(console.log);

// At beginning of your code
perf.start();

// At end of your code
perf.stop();

```
