<script setup>
import ScrapGasoil from './components/Scrap/ScrapGasoil.vue';
import ScrapGasolina from './components/Scrap/ScrapGasolina.vue';
import navBar from './components/navBar.vue';
import graphics from './components/Scrap/Graphics.vue';
import updateValuesForm from './components/Scrap/UpdateValuesForm.vue';
import differentData from './components/Scrap/Data.vue';
import VariationService from '@/Service/VariationService';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Definir estado para las secciones
const currentSection = ref('graphics');

// Definir valores por defecto
const defaultValues = {
  platts: 716.75,
  ice: 712.50,
  rbob: 2.10,
  tcambio: 1.1029
};

// Datos reactivos para los valores
const platts = ref(defaultValues.platts);
const ice = ref(defaultValues.ice);
const rbob = ref(defaultValues.rbob);
const tipoCambio = ref(defaultValues.tcambio);
const divisaCambio = ref(null);
const precioGasoilEm = ref(null);
const precioGasolinaEm = ref(null);
const gasoil = ref(null);
const gasolina = ref(null);
const variacionGasoil = ref(null);
const variacionGasolina = ref(null);
const error = ref(null);
let intervalId = null;

// Método para obtener todos los datos
const fetchData = async () => {
  const service = new VariationService();
  try {
    const data = await service.getAllData({
      platts: platts.value,
      ice: ice.value,
      rbob: rbob.value,
      tcambio: tipoCambio.value
    });
    divisaCambio.value = data.divisaCambio;
    precioGasoilEm.value = data.precioGasoleoEm;
    precioGasolinaEm.value = data.precioGasolinaEm;
    gasoil.value = data.gasoilScraped;
    gasolina.value = data.gasolinaScraped;
    variacionGasoil.value = data.variacionGasoil;
    variacionGasolina.value = data.variacionGasolina;
    error.value = null;
  } catch (err) {
    error.value = 'Error al obtener los datos';
    console.error(err);
  }
};

// Método para guardar valores en localStorage con timestamp
const saveValues = (newValues) => {
  const timestamp = new Date().getTime();
  localStorage.setItem('customValues', JSON.stringify({ ...newValues, timestamp }));
};

// Método para cargar valores desde localStorage si son válidos
const loadValues = () => {
  const storedData = localStorage.getItem('customValues');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    // Verificar si han pasado menos de 24 horas
    if (currentTime - parsedData.timestamp < twentyFourHours) {
      platts.value = parsedData.platts;
      ice.value = parsedData.ice;
      rbob.value = parsedData.rbob;
      tipoCambio.value = parsedData.tcambio;
    } else {
      localStorage.removeItem('customValues'); // Si los datos expiraron, eliminarlos
    }
  }
};

// Ciclos de vida de Vue
onMounted(() => {
  loadValues(); // Cargar valores almacenados si los hay
  fetchData();  // Obtener datos desde el servidor
  
  // Actualizar datos cada 5 segundos
  intervalId = setInterval(() => {
    fetchData();
  }, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

// Función para manejar la actualización de valores del formulario
const handleUpdateValues = (newValues) => {
  platts.value = newValues.platts;
  ice.value = newValues.ice;
  rbob.value = newValues.rbob;
  tipoCambio.value = newValues.tcambio;

  saveValues(newValues);  // Guardar nuevos valores en localStorage
  fetchData();            // Recalcular datos
};

// Función para cambiar la sección
const changeSection = (section) => {
  currentSection.value = section;
};
</script>

<template>
  <navBar />

  <!-- Botones de navegación -->
  <div class="button-container">
    <button class="nav-button" @click="changeSection('graphics')">Mostrar Gráficos y Variaciones</button>
    <button class="nav-button" @click="changeSection('differentData')">Mostrar Datos</button>
    <button class="nav-button" @click="changeSection('form')">Mostrar Formulario</button>
  </div>

  <!-- Sección de gráficos y variaciones -->
  <div v-if="currentSection === 'graphics'">
    <h2 class="section-title">Gráficos y Variaciones</h2>
    <graphics />
    <div class="blocks">
      <div class="gas-container">
        <ScrapGasoil :gasoil="gasoil" :variacionGasoil="variacionGasoil" />
      </div>
      <div class="gas-container">
        <ScrapGasolina :gasolina="gasolina" :variacionGasolina="variacionGasolina" />
      </div>
    </div>
  </div>

  <!-- Sección de datos adicionales -->
  <div v-if="currentSection === 'differentData'">
    <h2 class="section-title">Datos Adicionales</h2>
    <differentData
      :platts="platts"
      :ice="ice"
      :rbob="rbob"
      :tipoCambio="tipoCambio"
      :divisaCambio="divisaCambio"
      :precioGasoilEm="precioGasoilEm"
      :precioGasolinaEm="precioGasolinaEm"
      :gasoleo="gasoil"
      :gasolina="gasolina"
    />
  </div>

  <!-- Sección del formulario -->
  <div v-if="currentSection === 'form'">
    <h2 class="section-title">Actualizar Valores</h2>
    <updateValuesForm
      :initialPlatts="platts"
      :initialIce="ice"
      :initialRbob="rbob"
      :initialTcambio="tipoCambio"
      @update-values="handleUpdateValues"
    />
  </div>
</template>

<style scoped>
body {
  background-color: white;
  margin: 0;
  padding: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 40px;
}

.nav-button {
  padding: 14px 30px;
  font-size: 18px;
  background-color: #5b4d6e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #43385e;
}

/* Títulos de las secciones */
.section-title {
  text-align: center;
  font-size: 24px;
  color: #5b4d6e;
  margin-bottom: 20px;
}

/* Contenedor principal de los gráficos */
.blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 450px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
}

.gas-container {
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #5b4d6e;;
  padding: 10px;
  border-radius: 10px;
}

.gas-container:last-child {
  margin-right: 9em;
}

.gas-container:first-child {
  margin-left: 9em;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .blocks {
    flex-direction: column;
    align-items: stretch;
  }

  .gas-container {
    margin: 1em 0;
  }

  .gas-container:last-child {
    margin-right: 0;
  }

  .gas-container:first-child {
    margin-left: 0;
  }
}
</style>
