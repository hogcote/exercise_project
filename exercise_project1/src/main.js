'use static'
import Vue from 'vue';
import Home from './components/home/home.vue';
//引入路由
import VueRouter from 'vue-router';
//引入mint-ui
import Mint from 'mint-ui';
//引入Axios
import Axios from 'axios';
//原型挂在
Vue.prototype.$axios=Axios;
//默认配置

//引入mint-ui样式
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//安装插件
Vue.use(VueRouter);
//创建对象，配置路由规则
let router=new VueRouter({
    routes:[
        {path:'/',redirect:{name:'home'}},
        {name:'home',path:'/home',component:Home}
    ]
})

import App from './app.vue';


//创建vue实例
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})