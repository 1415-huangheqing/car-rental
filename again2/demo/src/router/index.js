
//import VueRouter from 'vue-router'
//import {createApp} from 'vue'
// import{ createRouter,createWebHashHistory } from 'vue-router'
// import About from '../components/About.vue'
// import Home from '../components/Home.vue'
// //createApp().use(VueRouter)
// const router =createRouter({
//     history:createWebHashHistory,
//     routes:[
//         {
//             path:'/about',
//             component:About,
//         },
//         {
//             path:'./home',
//             component:Home,
//         }
//     ]
// }) 
// export default router;
import { createRouter, createWebHistory } from 'vue-router'
//import Router from 'vue-router'
// Vue.use(Router)
 
  const routes = [
    {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
        title: "主页",
        keepAlive: true
    }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue'),
        meta: {
            title: "关于",
            keepAlive: true
        }
        },
        {
          path: '/',
          name: 'login',
          component: () => import('../pages/HelloWorld.vue'),
          meta: {
              title: "登录",
              keepAlive: true
          }
          },{
            path: '/login',
            name: 'login',
            component: () => import('../pages/HelloWorld.vue'),
            meta: {
                title: "登录",
                keepAlive: true
            }
            }
    
  
]
 
 
  const router = createRouter({
	history: createWebHistory(),
	routes
})
  export default router