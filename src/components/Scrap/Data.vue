<template>
  <div class="dataTable">
    <!-- Título 1 -->
    <div class="table-section">
      <h2 class="table-title">Futuros y Divisa</h2>
      <div class="table-wrapper">
        <table>
          <tr>
            <td><strong>Futuros gasoil:</strong></td>
            <td>{{ gasoleo }}</td>
          </tr>
          <tr>
            <td><strong>Futuros gasolina (RBOB):</strong></td>
            <td>{{ gasolina }}</td>
          </tr>
          <tr>
            <td><strong>EUR/USD - Euro Dólar:</strong></td>
            <td>{{ divisaCambio }}</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Título 2 -->
    <div class="table-section">
      <h2 class="table-title">Constantes</h2>
      <div class="table-wrapper">
        <table>
          <tr>
            <td><strong>Platts Gasóleo $/tonelada:</strong></td>
            <td>{{ platts }}</td>
          </tr>
          <tr>
            <td><strong>ICE Gasóleo $/tonelada:</strong></td>
            <td>{{ ice }}</td>
          </tr>
          <tr>
            <td><strong>RBOB Gasolina $/galón:</strong></td>
            <td>{{ rbob }}</td>
          </tr>
          <tr>
            <td><strong>Tipo de cambio:</strong></td>
            <td>{{ tipoCambio }}</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Título 3 -->
    <div class="table-section">
      <h2 class="table-title">Precios €/m3</h2>
      <div class="table-wrapper">
        <table>
          <tr>
            <td><strong>Gasoil €/m3:</strong></td>
            <td>{{ precioGasoilEm }}</td>
          </tr>
          <tr>
            <td><strong>Gasolina €/m3:</strong></td>
            <td>{{ precioGasolinaEm }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    platts: Number,
    ice: Number,
    rbob: Number,
    tipoCambio: Number,
    divisaCambio: Number,
    precioGasoilEm: Number,
    precioGasolinaEm: Number,
    gasoleo: Number,
    gasolina: Number
  }
};
</script>

<style scoped>
.dataTable {
  display: flex;
  justify-content: center; /* Alinear las tablas en el centro */
  gap: 130px; /* Aumentar el espacio entre las tablas */
  padding: 40px;
  flex-wrap: nowrap; /* Evitar que las tablas se apilen si hay espacio suficiente */
  background-color: #e9e9e9; /* Fondo gris claro */
  border-radius: 15px; /* Bordes redondeados para la sección completa */
}

.table-section {
  flex: 1;
  min-width: 300px;
  max-width: 400px; /* Aumentar el tamaño máximo de las tablas */
  padding: 20px;
}

.table-wrapper {
  margin: 0 auto;
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px; /* Aumentar el padding de las tablas */
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.table-title {
  text-align: center;
  color: #5b4d6e;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 15px; /* Añadir más separación entre el título y la tabla */
  font-size: 1.4em; /* Aumentar el tamaño de los títulos */
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 12px; /* Aumentar el tamaño del padding */
  font-size: 1.2em; /* Aumentar el tamaño de la fuente */
  color: #5b4d6e;
  font-weight: 900;
}

tr:nth-child(odd) {
  background-color: #e9e9e9;
}

td:nth-child(even) {
  color: rgba(0, 0, 0, 0.548);
}

tr {
  border-bottom: 1px solid #5b4d6e;
}

@media (max-width: 1024px) {
  .dataTable {
    flex-wrap: wrap; /* Alinear verticalmente si la pantalla es más pequeña */
  }

  .table-section {
    max-width: 100%;
    margin-bottom: 40px; /* Aumentar el espacio vertical entre tablas en pantallas más pequeñas */
  }
}

@media (max-width: 768px) {
  td {
    font-size: 1em;
  }

  .dataTable {
    flex-direction: column; /* Alinear tablas verticalmente en pantallas pequeñas */
    gap: 40px; /* Aumentar la separación vertical */
  }

  .table-section {
    margin-bottom: 40px; /* Aumentar el espacio entre las tablas si se apilan */
  }
}

@media (max-width: 480px) {
  td {
    font-size: 0.9em;
    padding: 8px;
  }

  .table-section {
    margin-bottom: 40px; /* Más espacio vertical entre tablas en pantallas muy pequeñas */
  }
}
</style>