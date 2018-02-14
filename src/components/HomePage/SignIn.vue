<template>
  <form>
    <span>{{apiMessage}}</span>
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

export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      apiMessage: '',
    };
  },
  methods: {
    submit() {
      this.$http.post(`${config.apiUrl}user/signin`, this.user)
        .then((response) => {
          this.apiMessage = response.body.message;
          localStorage.setItem('token', response.body.token);
          this.$router.push('/messageboard');
        }).catch((error) => {
          this.apiMessage = error.body.message;
        });
    },
  },
};
</script>

