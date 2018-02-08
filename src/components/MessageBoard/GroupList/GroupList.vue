<template>
  <div>
    <div class="group-controls">
      <div class="search-container">
        <input type="search" placeholder="Search Groups" />
      </div>
      <button class="btn" title="Add a New Group">+</button>
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
    };
  },
};
</script>

<style>
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

</style>
