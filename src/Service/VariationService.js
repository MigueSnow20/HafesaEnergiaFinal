import axios from 'axios';

export default class VariationsService{

    url = "http://localhost:8080/variacion";
    
    getGasoil(){
        return axios.get(this.url + "/gasoil");
    }

    getPrecioGasoilEm(){
        return axios.get(this.url + "/gasoil/precio");
    }

    getGasolina(){
        return axios.get(this.url + "/gasolina");
    }

    getPrecioGasolina(){
        return axios.get(this.url + "/gasolina/precio");
    }

    changeData(){
        return axios.put(this.url + "/data");
    }
}