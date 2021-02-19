<template>
    <div   v-on:click="view" class="p-2 card mt-2 pay last" v-if="(paid && item.paid) || (unpaid && item.paid == false) || (credit && item.credit ) ">
            <div class="pay_name has-text-weight-bold apart">
                <div>{{item.customer_name}}  | <span class="has-text-gray">{{item.customer_phone}}</span></div>
                <div class="has-text-success ">{{item.sid}}</div>
            </div>
            <div class="pay_date ">
                {{(new Date(item.updatedAt)).toDateString()}}
            </div>
            <div class="pay_ct">
                <div class="left has-text-info">
                    {{item.items.length}} Items | &#8377; {{item.total}}
                </div>
                <div class="right">
                 <b-field>
                <b-tag v-if="item.paid"
                type="is-success"
                
               
               >
                Paid
            </b-tag>
            <b-tag v-if="!item.paid"
                type="is-primary"
                
               
               >
                Unpaid
            </b-tag>
            <b-tag 
                type="is-danger"
                class="ml-2"
               v-if=" item.credit"
               >
               &#8377; {{item.credit}} Credit | PAY
            </b-tag>
            </b-field>
                </div>
            </div>
        </div>
</template>
<script>

export default {
    props:["item","paid","unpaid","credit"],
    methods:{
        view(){
            try {
                this.$router.push('/invoice/'+this.item.sid)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>