import VueRouter from 'vue-router';
import Cards from './components/Cards.vue'
import Card from './components/Card.vue'
import Detail from './components/Detail.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Cards},
    { path: '/cards', component: Cards },
    { path: '/detail/:id', component: Detail}
  ],
});

export default router;
