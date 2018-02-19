<template>
  <div class="message-form-wrapper">
    <form>
      <div class="text-area-wrapper">
        <textarea placeholder="Enter your message here" v-model="message">
        </textarea>
      </div>
      <div class="text-select">
        <div>
          <input type="radio" id="test5" name="priority" value="Normal" v-model="priority" />
          <label for="test5">Normal</label>
          <input type="radio" id="test6" name="priority" value="Urgent" v-model="priority" />
          <label for="test6">Urgent</label>
          <input type="radio" name="priority"
            id="filled-in-box" value="Critical" v-model="priority"/>
          <label for="filled-in-box">Critical</label>
        </div>
        <button class="btn" v-on:click.prevent="sendMessage">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import config from '../../config/index';

export default {
  data() {
    return {
      message: '',
      priority: '',
    };
  },
  methods: {
    sendMessage() {
      const currentGroup = this.$store.getters.getCurrentGroup;
      const { id, groupName } = currentGroup;
      if (!id) {
        this.$toaster.error('No Group Selected');
      } else {
        this.$http.post(`${config.apiUrl}group/${id}/message`,
          { message: this.message, priority: this.priority, groupName })
          .then((response) => {
            this.$toaster.success('Message Sent');
            this.message = '';
            this.priority = '';
            this.$store.dispatch('setNewMessage', response.data.messageData);
          })
          .catch((error) => {
            this.$toaster.error(error.body.message);
          });
      }
    },
  },
};
</script>

<style scoped>
  .message-form-wrapper {
    position: absolute;
    bottom: 3%;
    width: 75%;
  }
  form {
    display: flex;
  }
  .text-area-wrapper {
    background: #ffeeee;
    width: 70%;
    margin: 1rem;
  }
  textarea {
    border-radius: 0.5rem;
    height: 5rem;
    width: 100%;
    resize: none;
    border: 0.1rem solid #ccc;
    outline: none;
    background: #ffeeee;
    padding: 1rem;
  }
  .text-select {
    background: #ffeeee;
    display: flex;
    margin: 1rem;
  }
  .text-select button {
    height: 80%;
    margin: 0.2rem;
  }
</style>
