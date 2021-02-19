<template>

  <div id="app" :class="{mains:this.$route.name != 'login'}">
  <topbar v-if="this.$route.name != 'reg' && this.$route.name != 'invoice' && this.$route.name != 'login'  "></topbar>
    <bottomnav v-if="this.$route.name != 'reg' && this.$route.name != 'invoice' && this.$route.name != 'login' "></bottomnav>
    <router-view/>
  </div>
</template>
<script>
import bottomnav from '@/components/bottomnav'
import topbar from '@/components/topbar'
//import topbar from './components/topbar.vue'
export default {
  components:{
    bottomnav,
    topbar
   
  }
}
</script>
