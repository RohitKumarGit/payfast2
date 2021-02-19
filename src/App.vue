<template>

  <div id="app" class="mains">
  <topbar v-if="this.$route.name != 'reg' && this.$route.name != 'invoice' "></topbar>
    <bottomnav v-if="this.$route.name != 'reg' && this.$route.name != 'invoice' "></bottomnav>
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
