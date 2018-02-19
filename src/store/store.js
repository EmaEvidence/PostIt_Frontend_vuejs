import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      details: {},
      groups: [],
    },
    users: [],
    currentMessages: [],
    currentGroup: {
      id: '',
      groupName: '',
    },
  },
  getters: {
    getUser: (state) => {
      if (state.user.details.user.username) {
        return state.user.details.user.username;
      }
      return '';
    },
    getGroups: (state) => {
      const groups = state.user.groups;
      const sortedGroups = groups.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt));
      return sortedGroups;
    },
    getCurrentGroup: (state) => {
      return state.currentGroup;
    },
    getCurrentMessages: (state) => {
      if (state.currentMessages.length === 0) {
        return [{
          message: 'No message yet or No Group Selected',
          id: '',
          senderUsername: '',
          createdAt: '',
        }];
      }
      const sortedMessages = state.currentMessages.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt));
      return sortedMessages;
    },
    getUsers: (state) => {
      const currentGroup = state.user.groups.filter((group) => {
        if (group.id === state.currentGroup.id) {
          return group;
        }
      });
      const idArray = [];
      currentGroup[0].Users.filter((user) => {
        idArray.push(user.id);
        return user.id;
      });
      const newUserList = state.users.map((user) => {
        if (idArray.indexOf(user.id) < 0) {
          return {
            user,
            member: false,
          };
        }
        return {
          user,
          membership: true,
        };
      });
      return newUserList;
    },
  },
  mutations: {
    loggedIn: (state) => {
      state.user.loggedIn = true;
    },
    logOut: (state) => {
      state.user.loggedIn = false;
    },
    setUser: (state, user) => {
      state.user.details = { ...state.user.details, user };
    },
    setGroups: (state, groups) => {
      state.user.groups = [...groups];
    },
    setUsers: (state, users) => {
      state.users = [...users];
    },
    createGroup: (state, group) => {
      state.user.groups = [...state.user.groups, group];
    },
    setCurrentGroup: (state, group) => {
      state.currentGroup = group;
    },
    setCurrentMessages: (state, messages) => {
      state.currentMessages = [...messages];
    },
    setNewMessage: (state, message) => {
      state.currentMessages = [...state.currentMessages, message];
    },
    addMember: (state, userId) => {
      const newState = state.user.groups.map((group) => {
        return (group.id === state.currentGroup.id) ?
          [...group.Users, { id: userId }] :
          [...group.Users];
      });
      state.user.groups = newState;
    },
  },
  actions: {
    loggedIn: (context) => {
      context.commit('loggedIn');
    },
    logOut: (context) => {
      context.commit('logOut');
    },
    setUser: (context, user) => {
      context.commit('setUser', user);
    },
    setGroups: (context, groups) => {
      context.commit('setGroups', groups);
    },
    setUsers: (context, users) => {
      context.commit('setUsers', users);
    },
    createGroup: (context, group) => {
      context.commit('createGroup', group);
    },
    setCurrentGroup: (context, group) => {
      context.commit('setCurrentGroup', group);
    },
    setCurrentMessages: (context, messages) => {
      context.commit('setCurrentMessages', messages);
    },
    setNewMessage: (context, message) => {
      context.commit('setNewMessage', message);
    },
    addMember: (context, userId) => {
      context.commit('addMember', userId);
    },
  },
});

export default store;
