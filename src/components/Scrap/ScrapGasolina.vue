<template>
    <div class="blocks">
          <h1><strong> Variación del Gasolina: </strong> {{ gasolina }} </h1>
      </div>
</template>

<script>
import VariationService from '@/Service/VariationService';

export default {
  name: 'getGasolina',
  data() {
      return {
          gasolina: null,
          variationService: null,
      }
  },
  created() {
      this.variationService = new VariationService();
      this.variationService.getGasolina().then(data => {
          this.gasolina = data.data;
          console.log(this.gasolina);
      });
  }
}
</script>

<style scoped>
.greetings  {
text-align: center;
color:black
}

.blocks h1 {
  text-align: center;
  margin: auto; /* Centra el texto horizontalmente */
  line-height: 100px; /* Centra el texto verticalmente */
  color: #5b4d6e;
  font-weight: 900;
  font-family: "Times New Roman", Times, serif;
  font-size: 35px;
}
</style>