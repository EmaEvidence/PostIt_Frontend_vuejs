<template>
  <div>
    <h6><b>Manage Group Members</b></h6>
    <div class="search-container">
      <input type="search" placeholder="Search Members" />
    </div>
    <div class="members-container">
      <li v-for="user in getUsers" v-bind:key="user.user.id">
        {{user.user.username}}
        <button
          v-if="user.membership" class="custom-btn disabled"
          disabled="true" >Member</button>
        <button v-else class="custom-btn" v-on:click="addMember(user.user.id)">Add</button>
      </li>
    </div>
    <!-- <div class="list-control">
      <button class="btn left"> Prev </button>
      <button class="btn right"> Next </button>
    </div> -->
  </div>
</template>

<script>
import config from '../../../config/index';

export default {
  data() {
    return {
    };
  },
  methods: {
    addMember(userId) {
      const { id } = this.$store.getters.getCurrentGroup;
      this.$http.post(`${config.apiUrl}group/${id}/user`, { user: userId })
        .then((response) => {
          this.$toaster.success('User Added');
          this.$store.dispatch('addMember', response.data.user[0].id);
        }).catch((error) => {
          this.$toaster.error(error.body.message);
        });
    },
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>

<style scoped>
.members-container li {
  margin: 1rem 0;
  font-size: 1.1rem;
}
.custom-btn {
  background: teal;
  border: 0;
  border-radius: 0.5rem;
  color: white;
}
.members-container {
  text-align: justify;
  height: 35rem;
  overflow: auto;
}
.members-container button {
  float: right;
}
.disabled {
  opacity: 0.4;
}
</style>
