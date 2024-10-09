import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as cheerio from 'cheerio';

const app = express();
const port = process.env.PORT || 3000; // Usa el puerto proporcionado por Heroku o 3000 localmente

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para scraping del gasoil
app.get('/scrape-gasoil', async (req, res) => {
  try {
    const response = await axios.get('https://es.investing.com/commodities/london-gas-oil', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    const gasoil = $('[data-test="instrument-price-last"]').first().text().trim();
    if (!gasoil) {
      throw new Error('No se pudo encontrar el valor de gasoil');
    }
    
    res.send({ gasoil });
  } catch (error) {
    console.error('Error al obtener gasoil:', error);
    res.status(500).send({ error: 'Error al obtener datos de gasoil', details: error.message });
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

    const tipoCambio = $('[data-test="instrument-price-last"]').first().text().trim();
    res.send({ tipoCambio });
  } catch (error) {
    res.status(500).send('Error al obtener el tipo de cambio');
  }
});

// Iniciar el servidor en el puerto proporcionado
app.listen(port, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${port}`);
});
