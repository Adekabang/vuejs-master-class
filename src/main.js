// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyADU1sD6hBT2Li2ZLZIRzNksfS7qD-0kzk',
  authDomain: 'vue-school-forum-d4578.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-d4578.firebaseio.com',
  projectId: 'vue-school-forum-d4578',
  storageBucket: 'vue-school-forum-d4578.appspot.com',
  messagingSenderId: '184085520243',
  appId: '1:184085520243:web:5b30c69b6e2b9bc1fcaf06',
  measurementId: 'G-S506VDRK3D'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
