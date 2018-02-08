<template>
  <div class="message-section">
    <div class="message-container">
      <div v-for="message in messages">
        <p> {{message.message}} </p>
        <span>{{message.sender}}</span><span>{{message.timeSent}}</span>
      </div>
    </div>
    <div v-if="manageTeam" class="manage-group">
      <h6><b>Manage Group Members</b></h6>
      <div class="members-container">
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
        <li>Emmanuel <button class="custom-btn">Remove</button></li>
        <li>Emmanuel <button class="custom-btn">Add</button></li>
      </div>
      <div>
        <button class="btn left"> Prev </button>
        <button class="btn right"> Next </button>
      </div>
    </div>
  <button v-on:click.prevent="showTeamMembers" class="team-btn">Manage Group</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 2,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
        {
          id: 3,
          message: 'When sfjd wehwe fhjjsdf fbdsf dshfbsd shfb shjdfbsd sdhfj',
          sender: 'Emmanuel',
          timeSent: '1990/12/23',
        },
      ],
      manageTeam: false,
    };
  },
  methods: {
    showTeamMembers() {
      this.manageTeam = !this.manageTeam;
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
    padding: 2rem;
  }
  .members-container li {
    margin: 1rem 0;
    font-size: 1.1rem;
  }
  .team-btn {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: teal;
    color: white;
    position: absolute;
    bottom: 12%;
    right: 1.5%;
  }
  .custom-btn {
    background: teal;
    border: 0;
    border-radius: 0.5rem;
    color: white;
  }
  .members-container {
    text-align: justify;
  }
  .members-container button {
    float: right;
  }
</style>
