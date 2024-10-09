import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as cheerio from 'cheerio'; // Usamos cheerio para el scraping

const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para scraping del gasoil
app.get('/scrape-gasoil', async (req, res) => {
  try {
    const response = await axios.get('https://es.investing.com/commodities/london-gas-oil', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);

    // Obtener el valor de gasoil del HTML
    const gasoil = $('[data-test="instrument-price-last"]').first().text().trim();
    res.send({ gasoil });
  } catch (error) {
    res.status(500).send('Error al obtener datos de gasoil');
  }
});

// Ruta para scraping de la gasolina
app.get('/scrape-gasolina', async (req, res) => {
  try {
    const response = await axios.get('https://es.investing.com/commodities/gasoline-rbob', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);

    // Obtener el valor de gasolina del HTML
    const gasolina = $('[data-test="instrument-price-last"]').first().text().trim();
    res.send({ gasolina });
  } catch (error) {
    res.status(500).send('Error al obtener datos de gasolina');
  }
});

// Ruta para scraping del tipo de cambio EUR/USD
app.get('/scrape-tipo-cambio', async (req, res) => {
  try {
    const response = await axios.get('https://es.investing.com/currencies/eur-usd', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);

    // Obtener el valor del tipo de cambio EUR/USD del HTML
    const tipoCambio = $('[data-test="instrument-price-last"]').first().text().trim();
    res.send({ tipoCambio });
  } catch (error) {
    res.status(500).send('Error al obtener el tipo de cambio');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${port}`);
});