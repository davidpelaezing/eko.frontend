import axios from "axios";
const URL_BASE = 'http://localhost:8000/api';

export default function guardarRegistro(request){
    return axios.post(URL_BASE + '/registro', request);
}

