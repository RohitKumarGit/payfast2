<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Payments</div>
        <b-input v-on:input="search" v-model="name" placeholder="Search by Name of Ph No."></b-input>
        <b-field class="mt-2"> 
            <b-checkbox v-model="credit">Credit</b-checkbox>
              <b-checkbox v-model="paid">Paid</b-checkbox>
               <b-checkbox v-model="unpaid">Unpaid</b-checkbox>
        </b-field>

        <paycard  v-for="item in items" :key="item._id" :item="item" :credit="credit" :paid="paid" :unpaid="unpaid" ></paycard>
        
    </div>
</template>
<script>
import paycard from '@/components/paycard'
import axios from 'axios'
import Fuse from 'fuse.js'
export default {
    data(){
        return {
            items:[],
            name:"",
            paid:true,
            unpaid:true,
            credit:true
        }
    },
    components:{
        paycard
    },
    async created(){
        this.getData()
    },
    methods:{
        async getData(){
            try {
            const {data} = await axios.get('/api/invoice',{
                params:{
                    id : "602e65f666e395e95867a97c"
                }
            })
            console.log(data)
            this.items = data.invoices
        } catch (error) {
            console.log(error)
        }
        },
        search(){
        const inp = this.name
            if(inp.length == 0) {
                this.getData()
               
            }
            const options = {
           
  
             keys: ['customer_name','customer_phone']
                }
            const fuse = new Fuse(this.items,options)
           
            const p =  fuse.search(inp)
            var m = p.map(e=>{
                return e.item
            })
            this.items = m
        }
    }
}
</script>