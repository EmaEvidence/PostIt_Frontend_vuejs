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
