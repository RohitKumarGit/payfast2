import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './app.scss'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCvILHG7Co-4XI3ZYX8RTbevSZ8xRTGC4E",
  authDomain: "twitter-clone-40897.firebaseapp.com",
  databaseURL: "https://twitter-clone-40897.firebaseio.com",
  projectId: "twitter-clone-40897",
  storageBucket: "twitter-clone-40897.appspot.com",
  messagingSenderId: "821803565237",
  appId: "1:821803565237:web:32b4794f42c2f164413efc"
};
firebase.initializeApp(firebaseConfig);
Vue.use(Buefy)
import axios from 'axios'
Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // User is signed in.
    console.log("user signed in ")
    const {data} = await axios.post('/api/shop/verify',{
      email :user.email
  })
  if(data.new){
    if(window.location.pathname !== "/register"){
      window.location = '/register'
    }
      
  }
  else {
    console.log(data)
    store.commit("store",data.shop)
    if(window.location.pathname !== "/products"){
     
      window.location = '/products'
    }
  }
  } else {
    console.log(window.location.pathname)
    if(window.location.pathname !== "/"){
      window.location = '/'
    }
    
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
