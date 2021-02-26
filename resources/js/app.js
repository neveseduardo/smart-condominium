// libs
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import JQuery from 'jquery'
// styles and configs
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/app.scss'
import locale from 'element-ui/lib/locale/lang/pt-br'
// components
import App from "@/views/App.vue";
import initProgress from "@/progressbar";
import router from '@/router';
import store from '@/store';
import methods from '@/utils/globalMethods'
import SideBar from "@/components/SidebarPlugin";
import AdminSidebar from "@/components/AdminSidebarPlugin";
import sidebarLinks from "@/sidebarLinks";
import adminSidebarLinks from "@/adminSidebarLinks";

window.$ = JQuery
Vue.mixin({...methods})
Vue.use(SideBar, { sidebarLinks: sidebarLinks });
Vue.use(AdminSidebar, { adminSidebarLinks: adminSidebarLinks });
Vue.use(VueRouter);
Vue.use(ElementUI, {
    locale
})
initProgress(router);

new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router,
});
