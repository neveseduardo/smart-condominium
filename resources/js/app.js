import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import JQuery from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/app.scss'
import locale from 'element-ui/lib/locale/lang/pt-br'
import App from "@/views/App.vue";
import initProgress from "@/progressbar";
import router from '@/router';
import store from '@/store';
import methods from '@/utils/globalMethods'

window.$ = JQuery

Vue.mixin({...methods})
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
