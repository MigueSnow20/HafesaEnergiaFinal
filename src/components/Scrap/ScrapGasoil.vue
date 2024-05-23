<template>
      <div class="blocks">
            <h1><strong> Variación del Gasoil: </strong> {{ gasoil }} </h1>
        </div>
</template>

<script>
import VariationService from '@/Service/VariationService';

export default {
    name: 'getGasoil',
    data() {
        return {
            gasoil: null,
            variationService: null,
        }
    },
    created() {
        this.variationService = new VariationService();
        this.variationService.getGasoil().then(data => {
            this.gasoil = data.data;
            console.log(this.gasoil);
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