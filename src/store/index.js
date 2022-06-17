import { createStore } from 'vuex'
import * as axios from "core-js";
export default createStore({
  state: {
    items:[],
  },
  getters: {
  },
  mutations: {
    setItems(state,items){
      state.items = items
    },
  },
  actions: {
    // async fetchItems({state, commit}){
    //   try {
    //     commit('setLoading',true);
    //     const response = await axios.get('https://my-json-server.typicode.com/unhelless/jsonFile/catalog',{
    //         params:{
    //           _page: state.page,
    //           _limit: state.limit
    //         }
    //     })
    //     commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
    //   }catch (e){
    //     console.log(e)
    //   }finally {
    //     commit('setLoading',false);
    //   }
    // }
  },
  modules: {
  }
})
