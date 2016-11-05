import axios from 'axios';
import config from 'config'

const api = config.api;

const list = (siglaInstituto) => ({
  type: 'DISCIPLINAS_LIST',
  payload: axios.get(`${api}/institutos/${siglaInstituto}/disciplinas`).then(resp => resp.data)
})

const get = (sigla) => ({
  type: 'DISCIPLINAS_GET',
  payload: axios.get(`${api}/disciplinas/${sigla}`).then(resp => resp.data)
});

export default { list, get };
