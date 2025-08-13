<script setup></script>

<template>
  <header class="header">
    <img
      src="../../assets/images/logo.svg"
      alt="Base Apparel Logo"
      title="Base Apparel Logo"
      class="logo"
    />
  </header>
</template>

<style scoped>
.header {
  padding: 3.2rem;
}
.header .logo {
  width: 10rem;
  height: 2.1rem;
}

/* Desktops */

@media (min-width: 1200px) and (max-width: 1919px) {
  .header {
    padding: 6.4rem 0 0 16.5rem;
    width: 40%;
    position: absolute;
  }
  .header .logo {
    width: 15.8rem;
    height: 3.3rem;
  }
}

@media (min-width: 1920px) {
  .header {
    padding: 6.4rem 0 0 16.5rem;
    width: 40%;
    position: absolute;
  }
  .header .logo {
    width: 15.8rem;
    height: 3.3rem;
  }
}
</style>
