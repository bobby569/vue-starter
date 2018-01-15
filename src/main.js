import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { firebaseApp } from './firebase';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import App from './components/App.vue';
import SignUp from './components/Signup.vue';
import SignIn from './components/Signin.vue';
import Dashboard from './components/Dashboard.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/signup', component: SignUp },
    { path: '/signin', component: SignIn },
    { path: '/dashboard', component: Dashboard }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
