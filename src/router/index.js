import Vue from 'vue'
import VueRouter from 'vue-router'
//simport Home from '../views/Home.vue'
import reg from '@/views/reg'
import products from '@/views/products'
import addproduct from '@/views/addproduct'
import editproduct from '@/views/editproduct'
import payments from '@/views/payments'
import view from '@/views/view'
import createinvoice from '@/views/createinvoice'
import invoice from '@/views/invoice'
import send from '@/views/send'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'reg',
    component: reg
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:products
  },
  {
    path: '/edit/:id',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:editproduct
  },
  {
    path: '/add',
    name: 'AddProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:addproduct
  },
  {
    path: '/payments',
    name: 'AddProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:payments
  },
  {
    path: '/view',
    name: 'View',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:view
  },
  {
    path: '/create',
    name: 'createinvoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:createinvoice
  },
  {
    path: '/send',
    name: 'createinvoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:send
  },
  
  {
    path: '/invoice/:sid',
    name: 'invoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:invoice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
