import axios from 'axios';

const clienteAxios = axios.create({
  // baseURL: 'https://api.pktuno.com/',
    // baseURL: 'http://localhost:5000/',
    //   baseURL: 'https://api.pktuno.com/',
      baseURL: 'https://api.argoxx.com/',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
});

export default clienteAxios;