import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected:[],
    total : 0
  },
  mutations: {
    addp(context,item){
      context.selected.push({id:item._id,count:1})
      context.total+=item.price
    },
    removep(context,item){
      
      var m = 0
      context.selected = context.selected.filter(v=>{
        if(v.id == item._id){
          m = v.count*item.price
        }
        return v.id!=item._id
      })
      console.log(m)
      context.total = context.total  - m
    },
    incdec(context,data){
      
      const m = context.selected.map(v=>{
          if(v.id == data.item._id){
            context.total = context.total - v.count*data.item.price + data.count*data.item.price
            return {
              id:data.item._id,
              count :data.count
            }
          }
          else {
            return v
          }
      })
      context.selected = m
    }
  },
  actions: {
  },
  modules: {
  }
})
