import axios from 'axios';


const url = 'http://gabsurita.pythonanywhere.com'

const list = () => {
  return {
    type: 'INSTITUTOS_LIST',
    payload: axios.get(`/api/institutos`).then(resp => resp.data)
  }
}


const get = (sigla) => {
  return {
    type: 'INSTITUTOS_GET',
    payload: axios.get(`/api/institutos/${sigla}`).then(resp => resp.data)
  }
}




export default { list, get }
