<template>
    <div class="container m-2">
        <div class="logo has-text-centered  is-size-4 has-text-weight-bold has-text-primary">PAYFAST</div>
        <div class="sub-head has-text-centered line mt-2 mb-2 has-text-secondary has-text-weight-bold">Please provide us these details</div>
        <section>
            <b-field label="Owner's Name">
                <b-input v-model="name"></b-input>
            </b-field>
            <b-field label="Phone Number">
                <b-input v-model="phone"></b-input>
            </b-field>
           
            <b-field label="Shop's Name">
                <b-input v-model="sname"></b-input>
            </b-field>
            <b-field label="Aadhar Number">
                <b-input v-model="uid"></b-input>
            </b-field>
            <b-field label="GSTIN">
                <b-input v-model="gst"></b-input>
            </b-field>
            <b-field label="PIN CODE">
                <b-input v-model="pin_code"></b-input>
            </b-field>
            <b-field label="Address">
                 <b-input maxlength="200" type="textarea" v-model="ars"></b-input>
            </b-field>
             <b-button type="is-primary" expanded v-on:click="register">SUBMIT</b-button>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            sname :"",
            phone:"",
            ars:"",
            name:"",
            gst:"",
            uid:"",
           
            pin_code:""
        }
    },
    computed:{
        ...mapState(['email'])
    },
    created(){
        console.log(this.email)
    },
    methods:{
        async register(){
            if(this.sname.length == 0 || this.phone.length == 0 || this.gst.length == 0 || this.uid.length == 0 || this.ars.length == 0 || this.name.length == 0 ){
                alert("All fields are required")
                return
            }
            try {
                
                const {data} = await axios.post("/api/shop",{
                name :this.name,
                sname :this.sname,
                phone :this.phone,
                email: this.email,
                gst : this.gst,
                aadhar : this.uid,
                pin_code : this.pin_code,
                address:this.ars
            })  
                this.$store.commit("store",data.shop)
                this.$router.push('/products')
            } catch (error) {

                alert("Please enter data in proper format !")
            }
            
        }
    }
}
</script>