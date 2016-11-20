import { expect } from 'chai';

import AppActionCreator from 'actions/app';

describe('App ActionCreator', () => {
  describe('API Version', () => {
    let app;
    beforeEach(() => {
      app = AppActionCreator.getVersion();
    });
    it('should have type APP_VERSION_GET', () => {
      expect(app.type).to.be.equal('APP_VERSION_GET');
    });
    it('should payload as Promise', () => {
      expect(app.payload).to.be.a('promise');
    });
  });
});
