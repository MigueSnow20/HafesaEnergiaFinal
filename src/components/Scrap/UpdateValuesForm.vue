<template>
  <div class="form-container">
    <h2>Cambiar Valores de Platts, ICE, RBOB y Tipo de Cambio</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="platts">Platts Gasóleo $/tonelada:</label>
        <input
          id="platts"
          v-model="formData.platts"
          type="number"
          step="0.01"
          required
        />
      </div>

      <div class="form-group">
        <label for="ice">ICE Gasóleo $/tonelada:</label>
        <input
          id="ice"
          v-model="formData.ice"
          type="number"
          step="0.01"
          required
        />
      </div>

      <div class="form-group">
        <label for="rbob">RBOB Gasolina $/galón:</label>
        <input
          id="rbob"
          v-model="formData.rbob"
          type="number"
          step="0.01"
          required
        />
      </div>

      <div class="form-group">
        <label for="tcambio">Tipo de Cambio EUR/USD:</label>
        <input
          id="tcambio"
          v-model="formData.tcambio"
          type="number"
          step="0.0001"
          required
        />
      </div>

      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialPlatts: Number,
    initialIce: Number,
    initialRbob: Number,
    initialTcambio: Number
  },
  data() {
    return {
      formData: {
        platts: this.initialPlatts || 716.75,
        ice: this.initialIce || 712.50,
        rbob: this.initialRbob || 2.10,
        tcambio: this.initialTcambio || 1.1029
      }
    };
  },
  methods: {
    submitForm() {
      // Guardar en localStorage los valores
      localStorage.setItem('platts', this.formData.platts);
      localStorage.setItem('ice', this.formData.ice);
      localStorage.setItem('rbob', this.formData.rbob);
      localStorage.setItem('tcambio', this.formData.tcambio);

      // Emitir evento con los datos del formulario
      this.$emit('update-values', { ...this.formData });
      console.log('Valores actualizados y guardados en localStorage:', this.formData);
    }
  }
};
</script>

<style scoped>
.form-container {
  background-color: #f9f9f9;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #5b4d6e;
  font-family: "Times New Roman", Times, serif;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

label {
  flex: 1;
  font-weight: bold;
  color: #333;
  margin-right: 20px;
}

input {
  flex: 2;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.1em;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #5b4d6e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px;
}

button:hover {
  background-color: #4a3d5d;
}
</style>
