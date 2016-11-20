import api from 'utils/api';

const list = siglaInstituto => ({
  type: 'DISCIPLINAS_LIST',
  payload: api.get(`/institutos/${siglaInstituto}/disciplinas`).then(resp => resp.data),
});

const get = sigla => ({
  type: 'DISCIPLINAS_GET',
  payload: api.get(`/disciplinas/${sigla}`).then(resp => resp.data),
});

export default { list, get };
