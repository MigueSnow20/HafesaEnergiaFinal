import axios from 'axios'; // Usamos axios para hacer las solicitudes al proxy

export default class VariationsService {

  // Endpoint para obtener los datos del gasoil a través del servidor proxy
  async getGasoilScraped() {
    try {
      const response = await axios.get('http://localhost:3000/scrape-gasoil');
      const gasoil = parseFloat(response.data.gasoil.replace(',', '.'));
      return gasoil;
    } catch (error) {
      console.error('Error al obtener el gasoil desde el proxy:', error);
      throw error;
    }
  }

  // Endpoint para obtener los datos de la gasolina a través del servidor proxy
  async getGasolinaScraped() {
    try {
      const response = await axios.get('http://localhost:3000/scrape-gasolina');
      const gasolina = parseFloat(response.data.gasolina.replace(',', '.'));
      console.log('Gasolina parsed:', gasolina); // Verifica la conversión
      return gasolina;
    } catch (error) {
      console.error('Error al obtener la gasolina desde el proxy:', error);
      throw error;
    }
  }

  // Endpoint para obtener los datos del tipo de cambio EUR/USD a través del servidor proxy
  async getTipoDeCambio() {
    try {
      const response = await axios.get('http://localhost:3000/scrape-tipo-cambio');
      const tipoCambio = parseFloat(response.data.tipoCambio.replace(',', '.'));
      return tipoCambio;
    } catch (error) {
      console.error('Error al obtener el tipo de cambio desde el proxy:', error);
      throw error;
    }
  }

  // Método que realiza todas las operaciones y cálculos
  async getAllData({ platts, ice, rbob, tcambio }) {
    try {
      // Obtener valores actualizados desde el formulario o usar valores por defecto
      platts = platts || 716.75;
      ice = ice || 712.50;
      rbob = rbob || 2.10;
      tcambio = tcambio || 1.1029;

      // Scraping de gasoil, gasolina y tipo de cambio
      const [gasoil, gasolina, tipoCambio] = await Promise.all([
        this.getGasoilScraped(),
        this.getGasolinaScraped(),
        this.getTipoDeCambio(),
      ]);

      // Realizar cálculos de los valores
      const platss_gasoleo = (platts / tcambio) * 0.845;  // Platts convertido de $/tonelada a €/m3
      const diferencial_ice = gasoil - ice;               // Diferencial del ICE
      const precio_gasoleo = ((platts + diferencial_ice) / tipoCambio) * 0.845; // Precio en €/m3
      const precioGasoleoEm = (gasoil / tipoCambio) * 0.845;
      const variacion_gasoleo = precio_gasoleo - platss_gasoleo; // Variación del gasoil

      const rbob_aeuro = ((rbob / tcambio) / 3.78541) * 1000;  // RBOB de $/galón a €/m3
      const precio_gasolina = ((gasolina / tipoCambio) / 3.78541) * 1000;  // Precio gasolina €/m3
      const variacion_gasolina = precio_gasolina - rbob_aeuro;  // Variación de la gasolina

      // Formatear los resultados a 2 decimales
      const resultado = {
        variacionGasoil: parseFloat(variacion_gasoleo.toFixed(2)),
        variacionGasolina: parseFloat(variacion_gasolina.toFixed(2)),
        divisaCambio: parseFloat(tipoCambio.toFixed(4)),
        precioGasoleoEm: parseFloat(precioGasoleoEm.toFixed(2)),
        precioGasolinaEm: parseFloat(precio_gasolina.toFixed(2)),
        platts: parseFloat(platts.toFixed(2)),
        ice: parseFloat(ice.toFixed(2)),
        rbob: parseFloat(rbob.toFixed(4)),
        tipoCambio: parseFloat(tcambio.toFixed(4)),
        gasoilScraped: parseFloat(gasoil.toFixed(2)),
        gasolinaScraped: parseFloat(gasolina.toFixed(4))
      };
      // Devolver los resultados
      return resultado;
    } catch (error) {
      console.error('Error al obtener todos los datos:', error);
      throw error;
    }
  }
}
