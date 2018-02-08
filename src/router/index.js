import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/components/HomePage/IndexPage';
import MessageBoard from '../components/MessageBoard/MessageBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
    },
    {
      path: '/messageboard',
      name: 'MessageBoard',
      component: MessageBoard,
    },
  ],
});
