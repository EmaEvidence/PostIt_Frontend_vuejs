<template>
  <div class="header-wrapper #009688 teal">
    <nav class="#009688 teal">
      <div class="container">
        <div class="header">
          <div class="brand"><h3>Post It</h3></div>
          <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <span v-if="logedIn">
              <li><router-link to="/messageboard" exact>Messageboard</router-link></li>
              <li><button class="btn"> Log Out </button></li>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logedIn: true,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
 .header-wrapper {
    width: 100%;
    background: #b2d9ff;
    height: 6.5rem;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  nav ul {
    display: flex;
    list-style-type: none;
    margin-right: 3rem;
    vertical-align: middle;
  }
  .header ul li {
    margin: 0 2rem;
  }
  .header .brand  {
    vertical-align: middle;
    height: 6rem;
    display: flex;
    align-content: center;
    padding: 0%;
  }
  .header .brand h3  {
    line-height: 3rem;
    padding-left: 3rem;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-left: 3rem;
    padding-top: -0.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    font-size: 1.5rem;
  }
  .router-link-active {
    border-top: 0.5rem solid white;
  }
</style>
