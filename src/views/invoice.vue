<template>
    <div class="container m-2">
        <div class="logo has-text-centered pt-2 is-size-5 has-text-weight-bold has-text-primary">
            PAYFAST
        </div>
        <div class="shop has-text-centered"><div class="shop_name is-size-4 has-text-weight-bold">
        {{dt.shop_id.name}}
        </div>
        <div class="shop_address has-text-weight-semibold">
            GST : {{dt.shop_id.gst}}
        </div>
        <div class="shop_address has-text-weight-semibold">
            {{dt.shop_id.address}} | {{dt.shop_id.pin_code}}
        </div>
        <div class="shop_phone has-text-weight-medium">
            {{dt.shop_id.phone}}
        </div>
        <div class="shop_date mb-3">
        {{(new Date(dt.createdAt).toDateString())}}
        </div>
        </div>
        
        
        <b-table :data=data :bordered="true" :hoverable="true" :mobile-cards="false" >
        <b-table-column field="id.name" label="ITEM NAME" width="40" numeric v-slot="props">
                {{ props.row.id.name }}
        </b-table-column>
        <b-table-column field="count" label="UNITS" width="10" numeric v-slot="props">
                {{ props.row.count }}
        </b-table-column>
        <b-table-column field="id.price" label="Amount" width="20" numeric v-slot="props">
                &#8377;{{ props.row.count *  props.row.id.price}}
        </b-table-column>
        </b-table>
        <div class="bottom pt-3">
        <div class="b mb-1"> <span class="has-text-weight-bold">Total Sum:</span>  &#8377;{{dt.total}}</div>
        <div class="b"><span class="has-text-weight-bold">Discount:</span>  &#8377;{{dt.discount}}</div>
        <div class="b"><span class="has-text-weight-bold">Credit Amount:</span>  &#8377;{{dt.credit}}</div>
        <div class="b has-text-weight-bold has-text-primary is-size-5"><span>Final Amount:</span>  &#8377;{{dt.total - dt.discount - dt.credit}}</div>
        <b-button class="mt-5" :disabled="dt.paid"  v-on:click="pay" expanded type="is-primary">{{dt.paid? "ALREADY PAID" : "PAY NOW"}}</b-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            data:[],
            dt:{}
        }
    }
    ,
    methods:{
        async pay(){
            try {
                const {data} = await axios.post('/api/invoice/pay',{
                    id:this.dt._id
                })
                console.log(data)
                this.$router.push('/products')
            } catch (error) {
                console.log(error)
                alert("some error occured while processing payment")
            }
        }
    },
    async created(){
        const {data} = await axios.get('/api/invoice/sid',{
            params:{
                sid:this.$route.params.sid
            }
        })
        console.log(data)
        this.data = data.invoice.items
        this.dt = data.invoice
    }
}
</script>
