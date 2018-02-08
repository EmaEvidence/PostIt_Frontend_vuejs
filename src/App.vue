<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <div class="footer">
      &copf; Evidence {{new Date().getFullYear()}}
    </div>
  </div>
</template>

<script>
import NavBar from './components/HomePage/NavBar';

export default {
  components: {
    'nav-bar': NavBar,
  },
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  width: 100%;
  height: 6vh;
  text-align: center;
  font-size: 2rem;
  color: green;
}
</style>
