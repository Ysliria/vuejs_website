import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Bike from '@/components/posts/Bike';
import Mountain from '@/components/posts/Mountain';
import Tango from '@/components/posts/Tango';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/posts/bike", component: Bike},
    {path: "/posts/mountain", component: Mountain},
    {path: "/posts/tango", component: Tango}
]

const router = new VueRouter({
    mode: "history",
    routes
})
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
