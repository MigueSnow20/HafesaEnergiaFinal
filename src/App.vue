<script setup>
import ScrapGasoil from './components/Scrap/ScrapGasoil.vue';
import ScrapGasolina from './components/Scrap/ScrapGasolina.vue';
import navBar from './components/navBar.vue';
import graphics from './components/Scrap/Graphics.vue';
import differentData from './components/Scrap/Data.vue';
</script>

<template>
  <navBar />

  <graphics />

  <div class="blocks">
    <div class="gas-container">
      <ScrapGasoil />
    </div>
    <div class="gas-container">
      <ScrapGasolina />
    </div>
  </div>

  <differentData />
</template>

<style scoped>

.blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 450px; /* Reduce the gap between blocks */
  background-color: white;
  padding: 10px; /* Reduce padding */
  border-radius: 10px;
  width: 100%;
}

.gas-container {
  flex: 1; /* Distribute the space equally between containers */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #e9e9e9;
  padding: 10px; /* Reduce padding */
  border-radius: 10px;
}

/* Style adjustments for ScrapGasolina container */
.gas-container:last-child {
  margin-right: 9em /* Add some space between containers */
}

.gas-container:first-child {
  margin-left: 9em /* Add some space between containers */
}

/* You can add more specific styles for ScrapGasoil and ScrapGasolina components inside the .gas-container class */
.gas-container h2 {
  color: #5b4d6e; /* Adjust text color */
  font-size: 18px; /* Adjust font size */
  margin-bottom: 5px; /* Add some space below the heading */
}

.gas-container p {
  color: #333; /* Adjust text color */
  font-size: 14px; /* Adjust font size */
  line-height: 1.3; /* Adjust line height */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blocks {
    flex-direction: column; /* Stack blocks vertically */
    align-items: stretch;
  }

  .gas-container {
    margin: 1em 0; /* Add margin to top and bottom */
  }

  .gas-container:last-child {
    margin-right: 0; /* Remove right margin for last container */
  }

  .gas-container:first-child {
    margin-left: 0; /* Remove left margin for first container */
  }
}

</style>