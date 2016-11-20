import api from 'utils/api';

const getVersion = () => ({
  type: 'APP_VERSION_GET',
  payload: api.get('/').then(resp => resp.data).then(data => data.api_version),
});

export default { getVersion };
