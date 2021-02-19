<template>
    <div class="container m-2">
        <div class="head is-size-4 mb-3 has-text-weight-semibold has-text-primary">Add Product</div>
            <b-field label="Name">
                <b-input v-model="name" placeholder="Name of product"></b-input>
            </b-field>
            <b-field label="Price">
                <b-input v-model="price" placeholder="Enter in Units"></b-input>
            </b-field>
            <b-field label="Selling Unit">
                   <b-select placeholder="Choose" v-model="unit">
                    <option
                    v-for="unit in units"
                    :value="unit"
                    :key="unit">
                    {{ unit}}
                    </option>
                </b-select>
            </b-field>
             <b-button type="is-primary" class="mt-2" expanded v-on:click="add">ADD </b-button>
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            units:["Weight","Pcs"],
            name:"",
            price:"",
            unit:"Choose"
        }
    },
    computed:{
        ...mapState(['shop'])
    },
    methods:{
        async add(){
            if(this.name.length == 0 || this.price.length == 0 || this.unit.length ==0){
                alert("All fields are required")
                return
            }
            var data = {
                name:this.name,
                price:this.price,
                unit:this.unit,
                shop:this.shop._id
            }
            
            try {
                await axios.post('/api/product',data)
                this.$router.push('/products')
            } catch (error) {
                
                alert("Please enter data in proper format !")
            }
            console.log(data)
        }
    }
}
</script>