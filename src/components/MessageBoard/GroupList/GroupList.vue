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
        <input type="text" placeholder="Group Name" />
        <button class="btn">Create</button>
      </form>
    </div>
    <div class="group">
      <group v-bind:group="{groups}"></group>
    </div>
  </div>
</template>

<script>
import Group from './Group';

export default {
  components: {
    group: Group,
  },
  data() {
    return {
      groups: [
        {
          name: 'Andela',
        },
        {
          name: 'Andela21',
        },
      ],
      createFormControl: false,
    };
  },
  methods: {
    showCreateForm() {
      this.createFormControl = !this.createFormControl;
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
  /* border: 1px solid red; */
}
.create-group-container form {
  padding: 2rem;
}
</style>
