import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import ClienteLista from '@/view/ClienteLista'
import ClienteFormulario from '@/view/ClienteFormulario'

Vue.use(Router)

const routes = [
    {
        name : 'home',
        path : '/',
        component : Home,
    },

    {
        name : 'cliente-lista',
        path : '/cliente/lista',
        component : ClienteLista
    },

    {
        name : 'cliente-formulario',
        path : '/cliente/formulario',
        component : ClienteFormulario
    }
];

const router = new Router({
    routes
});

export default router;
