<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img :src="logoSrc" alt="Logo" class="logo">
    </div>

  </nav>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  data() {
    return {
      logoSrc: logo
    };
  }
};
</script>

<style scoped>
.navbar {
  background-color: #5b4d6e;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 80px; /* Aumenta la altura aquí */
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
}
.navbar-logo {
  margin-right: 20px;
}

.logo {
  height: 40px; /* Ajusta el tamaño según tus necesidades */
}

.navbar-menu {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-right: 20px;
}

.navbar-item a {
  color: white;
  text-decoration: none;
}

.navbar-item a:hover {
  text-decoration: underline;
}
</style>