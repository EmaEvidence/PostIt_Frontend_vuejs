<template>
  <form>
    <span>{{apiMessage}}</span>
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
import validateSignUp from '../../mixins//validate';

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
      apiMessage: '',
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
      this.apiMessage = '';
      const validate = validateSignUp(this.user);
      if (validate) {
        this.$http.post('http://localhost:3300/api/v1/user/signup', this.user)
          .then((response) => {
            this.apiMessage = response.body.message;
            localStorage.setItem('token', response.body.token);
            this.$route.router.go('/messageboard');
          }).catch((error) => {
            this.apiMessage = error.body.message;
            this.$router.push('/messageboard');
          });
      } else {
        this.$route.router.go('/messageboard');
        this.apiMessage = validate;
      }
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

