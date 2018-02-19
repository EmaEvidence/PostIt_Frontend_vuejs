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
import jwt from 'jsonwebtoken';
import NavBar from './components/HomePage/NavBar';
import config from '../src/config/index';

export default {
  components: {
    'nav-bar': NavBar,
  },
  name: 'App',
  mounted() {
    const user = jwt.decode(localStorage.getItem('token'));
    if (user) {
      this.$store.dispatch('setUser', user.data);
      this.$store.dispatch('loggedIn');
      this.$http.get(`${config.apiUrl}user/all`)
        .then((response) => {
          this.$store.dispatch('setUsers', response.data.users);
        })
        .catch((error) => {
          this.$toaster.error(error.body.message);
        });
    }
  },
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
