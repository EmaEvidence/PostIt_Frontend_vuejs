<template>
  <form>
    <div>
      <input type="text" placeholder="Username" v-model="user.username" />
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="user.password" />
    </div>
    <div>
      <div v-if="showLoader">
        <img src="http://res.cloudinary.com/damc3mj5u/image/upload/v1519080450/ajax-loader_nvwchn.gif"
          alt="loader" class="loader"/>
      </div>
      <button v-on:click.prevent="submit" class="waves-effect waves-light btn"> Sign In </button>
    </div>
  </form>
</template>

<script>
import config from '../../config';
import addTokenToHeader from '../../mixins/httpCalls';

export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      showLoader: false,
    };
  },
  methods: {
    submit() {
      this.showLoader = true;
      this.$http.post(`${config.apiUrl}user/signin`, this.user)
        .then((response) => {
          this.apiMessage = response.body.message;
          localStorage.setItem('token', response.body.token);
          this.$store.dispatch('loggedIn');
          this.$store.dispatch('setUser', response.body.user);
          this.showLoader = false;
          this.$toaster.success('Login Successful');
          addTokenToHeader();
          this.$router.push('/messageboard');
        }).catch((error) => {
          this.showLoader = false;
          this.$toaster.error(error.body.message);
        });
    },
  },
};
</script>

<style>
  .loader {
      width: 6rem;
      height: 6rem;
    }
</style>

