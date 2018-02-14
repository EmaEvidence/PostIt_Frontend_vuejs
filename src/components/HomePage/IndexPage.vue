<template>
  <div>
        <div class="main-wrapper">
          <div class="container">
            <div class="main col s12 m6">
              <div class="auth-container">
                <div class="form-controls">
                  <ul>
                    <li v-bind:class="{active: formControl.signUp}">
                      <button v-on:click="showForm('signUp')" class="#e0f2f1 teal lighten-5">
                        Sign Up
                      </button>
                    </li>
                    <li v-bind:class="{active: formControl.signIn}">
                      <button v-on:click="showForm('signIn')" class="#e0f2f1 teal lighten-5">
                        Sign In
                      </button>
                    </li>
                    <li v-bind:class="{active: formControl.reset}">
                      <button v-on:click="showForm('reset')" class="#e0f2f1 teal lighten-5">
                        Forgot Password
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <app-form v-bind:formControl={formControl}></app-form>
                </div>
              </div>
              <div class="about-section">
                <span>
                  Rethinking and Reinventing Mass Communication.
                  PostIt is a simple application that allows friends
                  and colleagues create groups for notifications.
                  This way one person can post notifications to everyone
                  by sending a message once.
                  The application allows people create accounts,
                  create groups and add registered users to the groups,
                  and then send messages out to these groups whenever they want.
                </span>
              </div>
            </div>
          </div>
          </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Form from './Form';
import NavBar from './NavBar';

export default {
  name: 'IndexPage',
  components: {
    'app-form': Form,
    navbar: NavBar,
  },
  data() {
    return {
      formControl: {
        signUp: true,
        signIn: false,
        reset: false,
      },
    };
  },
  methods: {
    showForm(type) {
      switch (type) {
        case 'signIn': {
          this.formControl = {
            signUp: false,
            signIn: true,
            reset: false,
          };
          return this.formControl;
        }
        case 'reset': {
          this.formControl = {
            signUp: false,
            signIn: false,
            reset: true,
          };
          return this.formControl;
        }
        default: {
          this.formControl = {
            signUp: true,
            signIn: false,
            reset: false,
          };
          return this.formControl;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
  .container {
    width: 80%;
    margin: auto;
  }
  .main {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
  }
  .auth-container {
    width: 30%;
    height: 80vh;
    overflow: auto;
  }
  .about-section {
    width: 65%;
    height: 80vh;
    padding: 4rem;
    text-align: center;
    overflow: auto;
  }
  .auth-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .about-section span {
    font-size: 3rem;
    /* color: #455a64; */
    color: green;
  }
  .form-controls {
    display: flex;
    padding: 0;
  }
  .form-controls ul {
    display: flex;
    justify-content: space-around;
    align-content: center;
    text-align: center;
    background: #e1f2f1;
    width: 100%;
    height: 3.2rem;
  }
  .form-controls ul li button {
    align-self: auto;
    flex: 2;
    height: 3rem;
    color: green;
    border: 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .active {
    border-bottom: 0.5rem solid green;
  }
</style>
