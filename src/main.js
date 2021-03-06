import Vue from 'vue'
import App from './App.vue'
import router from '@/router/rotas'
import vuetify from './plugins/vuetify'
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')


// ver exemplo Marcos https://github.com/marcosandrejorge/coup-state/blob/master/src/store/store.js