import axios from 'axios'; // Usamos axios para hacer las solicitudes
import * as cheerio from 'cheerio'; // Usamos cheerio para el scraping

export default class VariationsService {
  
  // Método para obtener datos del gasoil
  async getGasoilScraped() {
    try {
      const response = await axios.get('https://es.investing.com/commodities/london-gas-oil', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        },
      });
      const html = response.data;
      const $ = cheerio.load(html);
      const gasoil = $('[data-test="instrument-price-last"]').first().text().trim();
      return parseFloat(gasoil.replace(',', '.')); // Asegúrate de que el valor se devuelva como número
    } catch (error) {
      console.error('Error al obtener el gasoil:', error);
      throw error; // Lanza el error para que pueda ser manejado en el frontend
    }
  }

  // Método para obtener datos de la gasolina
  async getGasolinaScraped() {
    try {
      const response = await axios.get('https://es.investing.com/commodities/gasoline-rbob', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        },
      });
      const html = response.data;
      const $ = cheerio.load(html);
      const gasolina = $('[data-test="instrument-price-last"]').first().text().trim();
      return parseFloat(gasolina.replace(',', '.'));
    } catch (error) {
      console.error('Error al obtener la gasolina:', error);
      throw error;
    }
  }

  // Método para obtener el tipo de cambio EUR/USD
  async getTipoDeCambio() {
    try {
      const response = await axios.get('https://es.investing.com/currencies/eur-usd', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        },
      });
      const html = response.data;
      const $ = cheerio.load(html);
      const tipoCambio = $('[data-test="instrument-price-last"]').first().text().trim();
      return parseFloat(tipoCambio.replace(',', '.'));
    } catch (error) {
      console.error('Error al obtener el tipo de cambio:', error);
      throw error;
    }
  }

  // Método que realiza todas las operaciones y cálculos
  async getAllData({ platts, ice, rbob, tcambio }) {
    try {
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
        gasolinaScraped: parseFloat(gasolina.toFixed(4)),
      };

      // Devolver los resultados
      return resultado;
    } catch (error) {
      console.error('Error al obtener todos los datos:', error);
      throw error;
    }
  }
}
