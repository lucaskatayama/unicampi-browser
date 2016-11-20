import { expect } from 'chai';
import api from 'utils/api';


describe('Institutos ActionCreator', () => {
  describe('Instituto API', () => {
    describe('GET /institutos/', () => {
      let resp;
      beforeAll(async () => {
        resp = await api.get('/institutos');
      });
      it('should be OK', () => {
        expect(resp.status).to.be.equal(200);
      });
      it('should be a JSON response', () => {
        expect(resp.headers['content-type']).to.be.equal('application/json; charset=UTF-8');
      });
      it('should be an array of items', () => {
        expect(resp.data).to.be.a('array');
      });
      it('should contains an Instituto object', () => {
        expect(resp.data.length).to.not.equal(0);
        const firstItem = resp.data[0];
        const keys = ['sigla', 'website', 'nome'];
        expect(firstItem).to.have.all.keys(keys);
        keys.forEach(k => expect(firstItem[k]).to.be.a('string'));
      });
    });
    describe('GET /institutos/{sigla}', () => {
      let resp;
      beforeAll(async () => {
        resp = await api.get('/institutos/IC');
      });
      it('should be OK 200', () => {
        expect(resp.status).to.be.equal(200);
      });
      it('should be a JSON', () => {
        expect(resp.headers['content-type']).to.be.equal('application/json; charset=UTF-8');
      });
      it('should return a Instituto object', () => {
        expect(resp.data.length).to.not.equal(0);
        const keys = ['sigla', 'website', 'nome'];
        expect(resp.data).to.have.all.keys(keys);
        keys.forEach(k => expect(resp.data[k]).to.be.a('string'));
      });
    });
  });
});
