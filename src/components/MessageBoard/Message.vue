<template>
  <div class="message-section">
    <div class="message-container">
      <div v-for="message in getGroupMessages" v-bind:key="message.id">
        <p> {{message.message}} </p>
        <span>{{message.senderUsername}}</span>
        <span>{{message.priority}}</span>
        <span>{{message.createdAt.split('T')[0]}}</span>
      </div>
    </div>
    <div v-if="manageTeam" class="manage-group">
      <GroupMembers />
    </div>
  <button v-on:click.prevent="showTeamMembers" class="team-btn">Manage Group</button>
  </div>
</template>

<script>
import GroupMembers from './GroupList/GroupMembers';

export default {
  components: {
    GroupMembers,
  },
  data() {
    return {
      manageTeam: false,
    };
  },
  methods: {
    showTeamMembers() {
      const { id } = this.$store.getters.getCurrentGroup;
      if (!id) {
        this.$toaster.error('No Group selected');
      } else {
        this.manageTeam = !this.manageTeam;
      }
    },
  },
  computed: {
    getGroupMessages() {
      return this.$store.getters.getCurrentMessages;
    },
  },
};
</script>

<style scoped>
  .message-section {
    display: flex;
    justify-content: space-around;
  }
  .message-container {
    overflow: auto;
    height: 75vh;
    width: 75%;
  }
  .message-container div {
    background: snow;
    padding-top: 0rem;
    font-size: 2rem;
  }
  .message-container div span {
    font-size: 1rem;
    margin: 2rem;
  }
  .manage-group {
    width: 20%;
    padding: 2rem 1rem;
  }
  .team-btn {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: teal;
    color: white;
    position: absolute;
    bottom: 14%;
    right: 1.5%;
  }
</style>
