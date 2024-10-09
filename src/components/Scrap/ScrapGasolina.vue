<template>
    <div class="blocks">
      <h1><strong>Variación de la Gasolina: </strong> {{ variacionGasolina }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      gasolina: Number,
      variacionGasolina: Number,
    },
  };
  </script>s
  
  <style scoped>
  .blocks h1 {
    text-align: center;
    margin: auto; /* Centra el texto horizontalmente */
    line-height: 100px; /* Centra el texto verticalmente */
    color: #5b4d6e;
    font-weight: 900;
    font-family: "Times New Roman", Times, serif;
    font-size: 35px;
  }
  
  .error {
    color: red;
    text-align: center;
    font-size: 16px;
  }
  </style>