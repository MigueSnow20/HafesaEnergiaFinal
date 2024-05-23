<script setup>
import ScrapGasoil from './components/Scrap/ScrapGasoil.vue';
import ScrapGasolina from './components/Scrap/ScrapGasolina.vue';
import navBar from './components/navBar.vue';
import graphics from './components/Scrap/Graphics.vue';
</script>

<template>
  <navBar />

  <graphics />

  <div class = "blocks">
    <div>
      <ScrapGasoil />
    </div>
    <div class = "gasolina">
      <ScrapGasolina />
    </div>
  </div>
</template>

<style scoped>

.blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.blocks div {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #e9e9e9;
}

.gasolina {
  margin-left:135px;
}
</style>
