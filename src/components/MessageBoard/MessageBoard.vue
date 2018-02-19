<template>
  <div>
    <div class="messageboard-wrapper">
      <div class="group-wrapper">
        <group-list />
      </div>
      <div class="group-message-wrapper">
        <message />
        <send-message />
      </div>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken';
import GroupList from './GroupList/GroupList';
import Message from './Message';
import SendMessage from './SendMessage';
import config from '../../config/index';

export default {
  components: {
    'group-list': GroupList,
    message: Message,
    'send-message': SendMessage,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    const user = jwt.decode(localStorage.getItem('token'));
    if (user) {
      this.$http.get(`${config.apiUrl}user/groups`)
        .then((response) => {
          this.$store.dispatch('setGroups', response.data.groups);
        })
        .catch((error) => {
          this.$toaster.error(error.body.message);
        });
      this.$http.get(`${config.apiUrl}user/all`)
        .then((response) => {
          this.$store.dispatch('setUsers', response.body.users);
        })
        .catch((error) => {
          this.$toaster.error(error.body.message);
        });
    }
  },
};
</script>

<style scoped>
  .messageboard-wrapper {
    width: 100%;
    height: 87vh;
    display: flex;
  }
  .group-wrapper {
    width: 25%;
    background: rgb(243, 243, 243);
  }
  .group-message-wrapper {
    width: 75%;
    background: #ffeeee;
  }
</style>
