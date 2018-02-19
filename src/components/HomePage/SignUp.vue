<template>
  <form>
    <div>
      <input type="text" placeholder="Firstname Lastname" v-model="user.name" />
    </div>
    <div>
      <input type="text" placeholder="Username" v-model="user.username" />
    </div>
    <div>
      <input type="email" placeholder="Email" v-model="user.email" />
    </div>
    <div>
      <input type="text" placeholder="Phone No" v-model="user.phone" />
    </div>
    <div>
      <input
        type="password"
        placeholder="Password" v-model="user.password" v-on:keyup="checkPassword" />
    </div>
    <div>
      <span v-if="pmatch" class="success">Password Matches</span>
      <span v-else-if="pmismatch" class="error">Password does not match</span>
      <input
        type="password"
        placeholder="Confirm Password"
        v-model ="user.cpassword" v-on:keyup="checkPassword" />
    </div>
    <div>
      <input type="submit" class="waves-effect waves-light btn" v-on:click.prevent="submit" />
    </div>
  </form>
</template>

<script>
import config from '../../config';
import addTokenToHeader from '../../mixins/httpCalls';

export default {
  data() {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
        phone: '',
      },
      pmatch: false,
      pmismatch: false,
    };
  },
  methods: {
    checkPassword() {
      if (this.user.password === this.user.cpassword) {
        this.pmatch = true;
        this.pmismatch = false;
      } else {
        this.pmatch = false;
        this.pmismatch = true;
      }
    },
    submit() {
      this.$http.post(`${config.apiUrl}user/signup`, this.user)
        .then((response) => {
          localStorage.setItem('token', response.body.token);
          this.$store.dispatch('loggedIn');
          this.$store.dispatch('setUser', response.body.user);
          this.$toaster.success('Registration Successful');
          addTokenToHeader();
          this.$router.push('/messageboard');
        }).catch((error) => {
          this.$toaster.error(error.body.message);
        });
    },
  },
};
</script>

<style scoped>
  .success {
    color: green;
  }
  .error {
    color: red;
  }
</style>
