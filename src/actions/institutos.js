import api from 'utils/api';

const list = () => ({
  type: 'INSTITUTOS_LIST',
  payload: api.get('/institutos').then(resp => resp.data),
});


const get = sigla => ({
  type: 'INSTITUTOS_GET',
  payload: api.get(`/institutos/${sigla}`).then(resp => resp.data),
});

export default { list, get };
