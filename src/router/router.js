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
//引入吃饭吧组件
import Eat from '../pages/Eat.vue';
//引入购物车组件
import Cart from '../pages/Cart.vue';
//引入我的易果组件
import My from '../pages/My.vue';
//引入我的嵌套组件
//引入登录组件
import Login from '../pages/Login.vue';
//引入注册组件
import Reg from '../pages/Reg.vue';

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
    },{
        name:'cart',
        path:'/cart',
        component:Cart
    },{
        name:'my',
        path:'/my',
        component:My,
    },{
        name:'login',
        path:'/login',
        component:Login
    },{
        name:'reg',
        path:'/reg',
        component:Reg
    }]
});

// 暴露路由对象，为后续挂载容器做准备
export default router;
