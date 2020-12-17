<template>
  <div class="header grid-container">
    <div class="moger-logo grid-item">FAQNOW logo here</div>
    <div class="client-logo grid-item">Client logo here</div>
    <div class="user-info grid-item">User Info here</div>
  </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 33% auto 33%
  }
</style>