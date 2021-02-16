import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import locale from 'element-ui/lib/locale/lang/pt-br'
import App from "@/views/App.vue";
import initProgress from "@/progressbar";
import router from '@/router';
import store from '@/store';

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
