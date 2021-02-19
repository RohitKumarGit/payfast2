<template>
    <div class="card mt-2 last" >
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
                            <div class="side" >
                            
                                    
                                    <div v-if="selected"><b-numberinput v-on:input="incdec" v-model="c"  size="is-small" class="vm"  min="1" controls-position="compact"   ></b-numberinput><b-button size="is-small" v-on:click="remove(item._id)"   rounded type="is-success">
                                    <b-icon
                                    class="mr-1"
                                    pack="fas"
                                    icon="minus">
                                    </b-icon>
                                    REMOVE</b-button></div>
                                    
                                    <b-button  size="is-small" v-else v-on:click="add(item._id)"  rounded type="is-primary">
                                    <b-icon
                                    class="mr-1"
                                    pack="fas"
                                    icon="plus">
                                    </b-icon>
                                    ADD</b-button>
                            </div>
                    </div>
                    
             </div>
        </div>
</template>
<script>
export default {
    props:['item'],
    data(){
        return {
            selected : false,
            c:1
        }
    },
    created(){
        console.log(this.item)
    },
    methods:{
        add(){
            this.selected = true
            console.log(this.c)
            this.$store.commit("addp",this.item)
        },
        incdec(){
            console.log(this.c)
            this.$store.commit("incdec",{item:this.item,count:this.c})
        },
        remove(){
            this.selected = false
            this.$store.commit("removep",this.item)
        }
    }
}
</script>