import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex); 

const store = new Vuex.Store({
	state:{
		// 放所有共享状态
		list:[],
		total:0
	},
	mutations:{
		getListMutation(state,payload){
			state.list = payload;
		},
		getPageMutation(state,payload){
			state.total = payload;
		}
	},
	actions:{
		getList(store,payload){
			
			let someapi = 'api' + '/activity/talkact/list?pageIndex=0&pageSize=3&_=1539764140453';
			axios.get(someapi).then(res=>{
				/*this.datalist = res.data.bean.list;*/
				store.commit("getListMutation",res.data.bean.list);
				store.commit("getPageMutation",res.data.bean.total);
			});
			
		}
	}
});
export default store;