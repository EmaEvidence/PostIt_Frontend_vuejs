<template>
  <div>
    <div class="group-controls">
      <div class="search-container">
        <input type="search" placeholder="Search Groups" />
      </div>
      <button class="btn" v-on:click="showCreateForm" title="Add a New Group">+</button>
    </div>
    <div v-if="createFormControl" class="create-group-container">
      <form>
        <input type="text" placeholder="Group Name" v-model="groupName" />
        <button class="btn" v-on:click.prevent="createGroup">Create</button>
      </form>
    </div>
    <div class="group">
      <group></group>
    </div>
  </div>
</template>

<script>
import Group from './Group';
import config from '../../../config/index';

export default {
  components: {
    group: Group,
  },
  data() {
    return {
      groupName: '',
      createFormControl: false,
    };
  },
  methods: {
    showCreateForm() {
      this.createFormControl = !this.createFormControl;
    },
    createGroup() {
      this.$http.post(`${config.apiUrl}group`, { groupName: this.groupName, users: [] })
        .then((response) => {
          this.$store.dispatch('createGroup', response.data.group);
          this.$toaster.success(response.body.message);
          this.groupName = '';
        })
        .catch((error) => {
          this.$toaster.error(error.body.message);
        });
    },
  },
};
</script>
<style scoped>
.group-controls {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.search-container {
  width: 80%;
}
.group-controls input {
}
.group-controls button {
  width: 10%;
  text-align: center;
  padding: 0;
}
.group {
  padding: 0;
}
.create-group-container {
}
.create-group-container form {
  padding: 2rem;
}
</style>
