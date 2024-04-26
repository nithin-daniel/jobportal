import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
// import './style.css'
import '../src/assets/css/plugins/plugins.css'
import '../src/assets/css/vendor/bootstrap.min.css'
import '../src/assets/css/vendor/helper.css'
import '../src/assets/css/vendor/iconfont.min.css'
import '../src/assets/css/style.css'
import App from './App.vue'


import Home from './components/Home.vue'
import Sample from './components/Employee_Detail.vue'

const routes = [
    {path:'/',component:Home},
    {path:'/sample/:id',component:(Sample)},

]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
createApp(App).use(router).mount('#app')
