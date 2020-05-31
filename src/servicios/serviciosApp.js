import axios from 'axios';

const URL = 'https://innercityhealth-back-nodejs.herokuapp.com/';

export const obtenerAPI = (ruta, parametros?) => {
    if (parametros) {
        return axios.get(`${URL}+${ruta}`, parametros);
    } else {
        return axios.get(`${URL}+${ruta}`);
    }
};

export const postearAPI = (ruta, parametros?) => {
    return axios.post(`${URL}+${ruta}`, parametros);
};
