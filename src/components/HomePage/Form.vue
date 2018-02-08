<template>
   <div class="form-container">
    <div v-if="formControl.formControl.signUp">
      <sign-up></sign-up>
    </div>
    <div v-else-if="formControl.formControl.signIn">
      <sign-in></sign-in>
    </div>
    <div v-else-if="formControl.formControl.reset">
      <reset></reset>
    </div>
  </div>
</template>

<script>
import SignUp from './SignUp';
import SignIn from './SignIn';
import Reset from './Reset';

export default {
  name: 'Form',
  props: ['formControl'],
  components: {
    'sign-up': SignUp,
    'sign-in': SignIn,
    reset: Reset,
  },
  data() {
    return {
      logIn: this.formControl.formControl.signIn,
      signUp: this.formControl.formControl.signUp,
      reset: this.formControl.formControl.reset,
    };
  },
};
</script>


<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: auto;
    width: 100%;
  }

  form div {
    padding: 1rem;
    margin: auto;
    width: 100%;
  }

  form input {
    height: 3rem;
    width: 90%;
    align-self: center;
    border-radius: 0.4rem;
    border: 0.1rem solid #ccc;
    outline: none;
    padding-left: 0.5rem;
    font-size: 3rem;
  }

  form button {
    height: 3rem;
    border-radius: 0.4rem;
    outline: none;
  }
</style>

