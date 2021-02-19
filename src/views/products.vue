<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Products</div>
          <b-input v-on:input="search" placeholder="Search For a product" ></b-input>
         
         <b-button to="/add" tag="router-link" type="is-primary" class="mt-2" expanded>ADD PRODUCT</b-button>
        <div class="card mt-2 last" v-for="item in products" :key="item._id">
            <div class="card-header">
                <div class="card-header-title">
                    {{item.name}}
                </div>
            </div>
            <div class="content p-2 ">
                    <div class="apart">
                            <div class="price">
                            <span class="has-text-weight-bold has-text-primary p-2 is-size-4">&#8377;{{item.price}}</span>
                                    
                            </div>
                            <div class="side">
                                    <b-button size="is-small" :to="'/edit/'+item._id" tag="router-link" rounded type="is-primary">
                                    <b-icon
                                    class="mr-1"
                                    pack="fas"
                                    icon="edit">
                                    </b-icon>
                                    EDIT</b-button>
                            </div>
                    </div>
                    
             </div>
        </div>
        
    </div>
    
</template>
<script>
import  axios from 'axios'
import Fuse from 'fuse.js'
export default {
    data(){
        return {
            products:[],
            searchterm:"",
            phone:""
        }
    },
    
    methods:{
        async getData(){
            try {
                const {data} = await axios.get('/api/product',{
                    params:{
                        id:"602e65f666e395e95867a97c"
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