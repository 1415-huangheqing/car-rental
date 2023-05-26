import { createApp } from 'vue'
import App from './App.vue'
//引用路由器
import router from './router/index'
// import 'jquery/dist/jquery'
// import 'bootstrap/dist/css/bootstrap.css'
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
import bootstrapcss from './bootstrap-4.6.2-dist/css/bootstrap.min.css'
import bootstrapjs from './bootstrap-4.6.2-dist/js/bootstrap.bundle'

createApp(App).use(router,bootstrapcss,bootstrapjs).mount('#app')
