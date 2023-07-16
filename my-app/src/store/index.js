import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import tab from '../store/tab.js';
Vue.use(Vuex);

//将Store抛出
export default new Store({
    modules:{
        tab
    }
})
//还需要挂载到vue上,main.js