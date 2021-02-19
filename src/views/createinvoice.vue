<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Create Invoice</div>
          <b-input v-on:input="search" placeholder="Search For a product" ></b-input>
          
         <b-button v-on:click="send()"   type="is-success" class="mt-2" expanded>PROCEED</b-button>
        <product v-for="item in products" :key="item._id" :item="item"></product>
        
        
    </div>
    
</template>
<script>
import  axios from 'axios'
import Fuse from 'fuse.js'
import product from '@/components/product'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            products:[],
            searchterm:"",
            selected:[],
            items:[],
            phone:"",
            maxs:0
        }
    },
    computed:{
        ...mapState(['shop'])
    },
    components:{
        product
    },
   
         methods:{
        add(id){
            if(this.selected.includes(id)){
                return 
            }
            this.items.push({
                id,
                count:1
            })
            this.selected.push(id)
        },
        send(){
            try {
              
                this.$router.push('/send')
            } catch (error) {
                console.log(error)
            }
        },
        inc(id){
           console.log(id,this.$refs["c"+id][0])
            var vs = this.$refs["c"+id][0].value
            console.log(vs)
            const m = this.items.map(v=>{
                if(v.id == id ){
                    return {
                        id,
                        count:vs+1
                    }
                }
                else {
                    return v
                }
            })
            console.log(m)
        },
        remove(id){
            const p = this.selected.filter(v =>{
                console.log(v)
                return  v != id
            })
            const p1 = this.items.filter(v =>{
                return v.id !=id
            })
            this.items = p1
            console.log(p)
            this.selected = p
        },
        async getData(){
            try {
                const {data} = await axios.get('/api/product',{
                    params:{
                        id:this.shop._id
                    }
                })
               this.products = data.products
            } catch (error) {
                console.log(error)
            }
            
        },
        search(inp){
            if(inp.length == 0) {
                this.getData()
               
            }
            const options = {
           
  
             keys: ['name']
                }
            const fuse = new Fuse(this.products,options)
           
            const p =  fuse.search(inp)
            var m = p.map(e=>{
                return e.item
            })
            this.products = m
        }
    },
    created(){
        this.getData()
    }
}
</script>