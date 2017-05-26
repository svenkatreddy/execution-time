const chai = require('ultimate-chai');
const expect = chai.expect;
const sinon = require('sinon');
const logstub = sinon.stub();

const executionTime = require('../')(logstub);

describe('index.js', () => {
  context('when execution time is used', () => {
    
    it('start should be a method', (done) => {
      expect(executionTime.start).to.be.ok();
      done();
    });
    
    it('stop should be a method', (done) => {
      expect(executionTime.stop).to.be.ok();
      done();
    });
    
    it('should return log time', (done) => {
      executionTime.start();  
      setTimeout(function() { 
          expect(executionTime.stop()).to.be.above(1000);
          done();
      }, 1000);
    });
    
  });

});