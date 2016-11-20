import { expect } from 'chai';
import AppReducer from 'reducers/app';

describe('App Reducer', () => {
  describe('Version Change', () => {
    let previousState;
    beforeEach(() => {
      previousState = {
        version: '',
      };
    });
    it('should set the correct version', () => {
      const action = {
        type: 'APP_VERSION_GET_FULFILLED',
        payload: '1.0.0',
      };
      const newState = AppReducer(previousState, action);
      expect(newState.version).to.be.equal('1.0.0');
    });
  });
});
