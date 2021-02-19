<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Edit Product</div>
            <b-field label="Name">
                <b-input v-model="name" placeholder="Name of product"></b-input>
            </b-field>
            <b-field label="Price">
                <b-input v-model="price" placeholder="Enter in Units"></b-input>
            </b-field>
            <b-field label="Selling Unit" >
                <b-select placeholder="Choose " v-model="unit">
                    <option
                    v-for="unit in units"
                    :value="unit"
                    :key="unit">
                    {{ unit}}
                    </option>
                </b-select>
            </b-field>
             <b-button type="is-primary" class="mt-2" expanded v-on:click="add">
              <b-icon
                pack="fas"
                icon="save"
               class="mr-2"
                size="is-small">
               
            </b-icon>
             SAVE </b-button>
             <b-button type="is-danger" class="mt-2" expanded v-on:click="remove">
             <b-icon
                pack="fas"
                icon="trash-alt"
               class="mr-2"
                size="is-small">
               
            </b-icon>
             
             REMOVE </b-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            units:["Weight","Pcs"],
            name:"",
            price:"",
            unit:"Choose"
        }
    },
    async created(){
        const {data} = await axios.get('/api/product/'+this.$route.params.id)
        this.name = data.item.name
        this.price = data.item.price
        this.unit = data.item.unit
        console.log(data)
    },
    methods:{
        async add(){
            var changes = {
                name:this.name,
                price:this.price,
                unit:this.unit
            }
            try {
                 await axios.put('/api/product',{
                   id:this.$route.params.id,
                   changes
               })
               this.$router.push('/products')
               
            } catch (error) {
                console.log(error)
            }
            
        },
        async remove(){
            try {
                await axios.post('/api/product/remove',{
                    id:this.$route.params.id
                })
                this.$router.push('/products')
            } catch (error) {
                alert("Please enter data in proper format !")
            }
           
        }
    }
}
</script>