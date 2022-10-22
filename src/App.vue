<template>
  <NavBar />
  <!-- <router-link v-if="!$store.state.username" to="/login">logisdffff</router-link>
  <a v-if="$store.state.username" @click="logout">Log oyr</a> -->
  <RouterView />
  
</template>


<script>
import NavBar from './components/NavBar.vue';
export default {
    name: "App",
    components: { NavBar }
}
</script>

<style>

</style>
