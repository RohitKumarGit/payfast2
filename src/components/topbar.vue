<template>
    <div class="topbar mb-3">
        <div class="right">
         <div class="logo has-text-centered pt-2 is-size-5 has-text-weight-bold has-text-primary">PAYFAST</div>
        </div>
        <div class="left">
        <b-button type="is-primary" class="mt-1 mb-1" v-on:click="logout">Log Out</b-button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    methods:{
        logout(){
            firebase.auth().signOut().then(() => {
  // Sign-out successful.
    window.location = '/'
}).catch((error) => {
  // An error happened.
  console.log(error)
})
        }
    }
}
</script>