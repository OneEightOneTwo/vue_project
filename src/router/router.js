//引入模块
import Vue from 'vue';
import VueRouter from 'vue-router';

// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter);

//引入各个主组件（一级组件）
//引入首页组件
import Home from '../pages/Home.vue';
//引入分类组件
import Classify from '../pages/Classify.vue';
import Eat from '../pages/Eat.vue';
import Goods from '../pages/Goods.vue';
import List from '../pages/List.vue';
import Cart from '../pages/Cart.vue';


//引入嵌套组件

//实例化路由
var router=new VueRouter({
    routes:[{
        path:'/',//重定向
        redirect:'/home',
    },{
        name:'home',
        path:'/home',
        component:Home
    },{
        name:'classify',
        path:'/classify',
        component:Classify
    },{
        name:'eat',
        path:'/eat',
        component:Eat
    }
    ,{
        name:'goods',
        path:'/goods',
        component:Goods
    }
    ,{
        name:'list',
        path:'/list',
        component:List
    },{
        name:'cart',
        path:'/cart',
        component:Cart
    }]
});

// 暴露路由对象，为后续挂载容器做准备
export default router;
