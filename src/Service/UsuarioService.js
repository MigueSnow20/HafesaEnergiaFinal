import axios from 'axios';

export default class UsuarioService{

    url = "http://localhost:8080/user/";
    
    getAll(){
        return axios.get(this.url + "all");
    }
}