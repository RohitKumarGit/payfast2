<template>
    <div class="login p-2">
    <div><div class="logo has-text-centered pt-2 is-size-5 has-text-weight-bold has-text-primary">PAYFAST</div></div>
        
        <div class="login_btn">
        <button type="button "  class="login-with-google-btn" v-on:click="login">
  Sign in with Google
</button>

        </div>
        
    </div>
</template>
<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
    methods:{
        async login(){
            try {
                var provider = new firebase.auth.GoogleAuthProvider();
                const result = await firebase.auth().signInWithPopup(provider)
                this.$store.commit("email",result.user.email)
                const {data} = await axios.post('/api/shop/verify',{
                    email :result.user.email
                })
                if(data.new){
                    this.$router.push('/register')
                }
                else {
                    this.$router.push('/products')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>