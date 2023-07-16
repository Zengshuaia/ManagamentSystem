import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Mall from '../views/Mall.vue';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import PageOne from '../views/PageOne.vue';
import PageTwo from '../views/PageTwo.vue';

Vue.use(VueRouter);

//1.创建组件

//2.将组件与路由映射
const routes = [
    //主路由
    {
        path:"/",
        component:Main,
        redirect:"/home",//重定向
        children:[
            {path:"home",component:Home},
            {path:"user",component:User},
            {path:"mall",component:Mall},
            {path:"page1",component:PageOne},
            {path:"page2",component:PageTwo},
        ]
},

  ]

//3.创建router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

//4.将router抛出
export default router

//5.挂载到main.js上