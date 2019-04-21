//引入
import Vue from 'vue';
import Vuex,{
    Store
} from 'vuex';

import state from './state.js';
//使用
Vue.use(Vuex);

// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
// * actions用来操作mutations，mutations用来操作state

const store=new Store({
    state,
    mutations:{

    },
    actions:{

    },
});

export default store;
