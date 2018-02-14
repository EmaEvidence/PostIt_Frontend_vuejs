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
import GroupList from './GroupList/GroupList';
import Message from './Message';
import SendMessage from './SendMessage';

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
