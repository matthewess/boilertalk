import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/components/Login';
import Home from '@/components/Home';
import NotFound from '@/components/NotFound';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '*', component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLoggedIn) {
      next({ path: '/', query: { redirect: to.fullPath } });
    }
  }
  next();
});

export default router;
