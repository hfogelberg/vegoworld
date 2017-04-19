import VueRouter from 'vue-router';
import Cardlist from './components/Cardlist.vue'
import Card from './components/Card.vue'
import User from './components/User.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Cardlist},
    { path: '/cards', component: Cardlist },
    { path: '/card/:id', component: Card},
    { path: '/user', component: User}
  ],
});

export default router;
