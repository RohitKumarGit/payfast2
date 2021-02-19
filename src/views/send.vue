<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Customer Details</div>
        <b-field label="Customer Name">
                <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Customer Phone">
                <b-input v-model="phone"></b-input>
        </b-field>
        <b-field label="Credit Amount">
                <b-input v-model="credit"></b-input>
        </b-field>
        <b-field label="Discount">
                <b-input v-model="discount"></b-input>
        </b-field>
         <b-button :disabled="selected.length == 0" type="is-success" expanded v-on:click="send">
         <span v-if="selected.length >  0">SEND INVOICE</span>
         <span v-else>ADD PRODUCTS FIRST</span>
         </b-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import  axios from 'axios'

export default {
    data(){
        return {
            name:"",
            phone:"",
            credit :0 ,
            discount : 0
        }
    },
    computed:{
        ...mapState(['selected',"total","shop"])
    },
    methods:{
        async send(){
            if(this.name.length == 0 || this.phone.length == 0 ){
                alert("All fields are required")
                return
            }
           try {
               const data = {
                   customer_name : this.name,
                   customer_phone : this.phone,
                   shop_id          : this.shop._id,
                   items:this.selected ,
                   discount : this.discount,
                   credit : this.credit,
                   total:this.total
               }
               await axios.post('/api/invoice',data)
               console.log("sent")
               this.$router.push('/products')
           } catch (error) {
                 alert("Please enter data in proper format !")
           }
        }
    }
}
</script>