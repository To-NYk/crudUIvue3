<template>
  <nav class="navbar navbar-dark bg-info navbar-expand-sm">
    <div class="container">
        <router-link to="/" class="navbar-brand">VueUI </router-link>
        <div class="">
          <router-link to="/login" class="navbar-brand">Выйти</router-link>
        </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name : "NavBar"
    }
</script>

<style lang="scss" scoped>

</style>