<template>
  <ul>
    <li v-for="group in getGroups"
      v-on:click="setGroupDetails(group.id, group.groupName)" v-bind:key=group.id >
      <span>{{group.groupName}}</span><span>more</span>
    </li>
  </ul>
</template>

<script>
import config from '../../../config/index';

export default {
  data() {
    return {
    };
  },
  methods: {
    setGroupDetails(id, groupName) {
      this.$store.dispatch('setCurrentGroup', { id, groupName });
      this.$http.get(`${config.apiUrl}group/${id}/messages`)
        .then((response) => {
          this.$store.dispatch('setCurrentMessages', response.data.messages);
        })
        .catch((error) => {
          this.$toaster.error(error.body.message);
          if (error.body.message === 'No Message For that Group') {
            this.$store.dispatch('setCurrentMessages', []);
          }
        });
    },
  },
  computed: {
    getGroups() {
      return this.$store.getters.getGroups;
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0 1rem;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #ccc;
  margin: 0.01rem 0;
  height: 4rem;
  background: snow;
  align-items: center;
  cursor: pointer;
}
li:hover {
  opacity: 0.6;
}
</style>
