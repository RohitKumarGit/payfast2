<template>
    <div class="bt ">
    <router-link to="/products" class="bt_item" tag="div">
      
        <b-icon
                pack="fas"
                icon="shopping-bag"
                type="is-primary"
                size="is-small">
            </b-icon> Products
      
       </router-link>
     <router-link to="/create" class="bt_item" tag="div">
        <b-icon
                pack="fas"
                icon="file-invoice"
                type="is-primary"
                size="is-small">
               
            </b-icon>
             Create Invoice
     </router-link>
       <router-link to="/payments" class="bt_item" tag="div">
        <b-icon
                pack="fas"
                icon="rupee-sign"
                type="is-primary"
                size="is-small">
                
            </b-icon>
            Payments
      </router-link>
    </div>
</template>