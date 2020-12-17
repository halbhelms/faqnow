<template>
  <div class="layout-grid main">
    <Header />
    <h2>Account Edit Page</h2>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  .main {
    height: 100vh;
    margin: 0;
    padding: 0
  }

  .layout-grid {
    display: grid;
    grid-template-rows: 40px auto;
  }

  * {
    outline: 1px solid red;
  }
</style>