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

    getDivisaCambio(){
        return axios.get(this.url + "/divisa");
    }

    getPlatts(){
        return axios.get(this.url + "/platts");
    }

    getIce(){
        return axios.get(this.url + "/ice");
    }

    getRBob(){
        return axios.get(this.url + "/rbob");
    }

    getTipoDeCambio(){
        return axios.get(this.url + "/tcambio");
    }

    getGasoilScraped(){
        return axios.get(this.url + "/gasoilScraped");
    }

    getGasolinaScraped(){
        return axios.get(this.url + "/gasolinaScraped");
    }


    changeData(){
        return axios.put(this.url + "/data");
    }
}