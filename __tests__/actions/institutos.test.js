import { expect } from 'chai';
import ActionCreator from 'actions/institutos';


describe('Instituto ActionCreator', () => {
  describe('List', () => {
    let action;
    beforeEach(() => {
      action = ActionCreator.list();
    });
    it('should return correct type', () => {
      expect(action.type).to.be.equal('INSTITUTOS_LIST');
    });
    it('should return payload with a promise', () => {
      expect(action.payload).to.be.a('promise');
    });
  });
  describe('Get', () => {
    let action;
    beforeEach(() => {
      action = ActionCreator.get('IC');
    });
    it('should return correct type', () => {
      expect(action.type).to.be.equal('INSTITUTOS_GET');
    });
    it('should return payload with a promise', () => {
      expect(action.payload).to.be.a('promise');
    });
  });
});
