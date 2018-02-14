<template>
  <ul>
    <li v-for="group in groups">
      <span>{{group.name}}</span><span>more</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          name: 'Andela',
        },
        {
          name: 'Andela21',
        },
        {
          name: 'Andela21',
        },
        {
          name: 'Andela21',
        },
      ],
    };
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
  border: 1px solid #ccc;
  margin: 0.01rem 0;
  height: 3rem;
  background: rgb(240, 237, 237);
}

</style>
