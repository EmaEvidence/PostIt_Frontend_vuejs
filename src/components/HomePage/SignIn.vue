<template>
  <form>
    <div>
      <input type="text" placeholder="Username" v-model="user.username" />
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="user.password" />
    </div>
    <div>
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
    };
  },
  methods: {
    submit() {
      this.$http.post(`${config.apiUrl}user/signin`, this.user)
        .then((response) => {
          this.apiMessage = response.body.message;
          localStorage.setItem('token', response.body.token);
          this.$store.dispatch('loggedIn');
          this.$store.dispatch('setUser', response.body.user);
          this.$toaster.success('Login Successful');
          addTokenToHeader();
          this.$router.push('/messageboard');
        }).catch((error) => {
          this.$toaster.error(error.body.message);
        });
    },
  },
};
</script>

