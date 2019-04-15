import Vue from 'vue';
//引入全局数据
//待引

import axios from 'axios';

//Vue继承axios方法（就是把axios挂在）
Vue.prototype.$axios=axios;

export default{
    //参数设置
    //url:后端请求的链接
    //params：传给后端的参数
    get(url, params) {
        state.isToast += 1;
        return new Promise((resovle, reject) => {
            axios.get(url, {
                params: {
                    ...params
                }
            })
                .then(function (response) {
                    state.isToast -= 1;
                    resovle(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    },
    post(url, params) {
        state.isToast += 1;
        return new Promise((resovle, reject) => {
            axios.post(url, {
                params: {
                    ...params
                }
            })
                .then(function (response) {
                    state.isToast -= 1;
                    resovle(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    },

}











