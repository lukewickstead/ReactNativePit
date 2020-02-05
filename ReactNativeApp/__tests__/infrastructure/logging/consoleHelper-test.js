import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, {expect as chaiExpect} from 'chai';

import {consoleLog, consoleError} from '../../../infrastructure/logging/consoleHelper';

chai.use(sinonChai);

describe('ConsoleHelpers', () => {
  describe('consoleLog', () => {
    beforeEach(function() {
      sinon.spy(console, 'log');
    });

    it('should call console.log with the expected parameters', () => {
      consoleLog('TestLog');
      chaiExpect(console.log).to.be.calledWith('TestLog');
    });

    afterEach(function() {
      console.log.restore();
    });
  });

  describe('consoleError', () => {
    beforeEach(function() {
      sinon.spy(console, 'error');
    });

    it('should call console.log with the expected parameters', () => {
      consoleError('TestError');
      chaiExpect(console.error).to.be.calledWith('TestError');
    });

    afterEach(function() {
      console.error.restore();
    });
  });
});
