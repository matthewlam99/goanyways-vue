import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'
import { routes } from './router/routes'

//Bootstrap
Vue.use(BootstrapVue);

//Firebase Config
var config = require('./data/fbk.json');

//Initialize Firebase
Firebase.initializeApp(config);

//Set-up Vue Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

//Checks each page load whether the pages requires auth
router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth && !currentUser) {
    next('/sign-in');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

//Stops execution of nav guard 'beforeEach'
Firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    el: '#app',
    store: store,
    router: router,
    components: { App },
    template: '<App/>'
  })
})

