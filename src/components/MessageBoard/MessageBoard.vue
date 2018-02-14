<template>
  <div>
    <div class="messageboard-wrapper">
      <div class="group-wrapper">
        <group-list></group-list>
      </div>
      <div class="group-message-wrapper">
        <div class="message-form-wrapper">
          <form>
            <div class="text-area-wrapper">
              <textarea></textarea>
            </div>
            <div class="text-select">
              <div>
                  <input type="radio" id="test5" name="priority" />
                  <label for="test5">Normal</label>
                  <input type="radio" id="test6" name="priority" />
                  <label for="test6">Urgent</label>
                <!-- </p>
                <p> -->
                  <input type="radio" name="priority" id="filled-in-box"/>
                  <label for="filled-in-box">Critical</label>
                <!-- </p> -->
              </div>
              <button class="btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupList from './GroupList/GroupList';

export default {
  components: {
    'group-list': GroupList,
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
  .message-form-wrapper {
    /* background: tan; */
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
