import Vue from 'vue';
import './hooks';
import HelloComponent from './components/Hello.vue';
import HelloTSComponent from './components/HelloTS.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        { path: '/', name: 'Hello', component: HelloComponent},
        { path: '/hello-ts', name: 'HelloTS', component: HelloTSComponent}
    ]
});

let v = new Vue({
    el: "#app",
    router,
    template: `<router-view></router-view>`
});
