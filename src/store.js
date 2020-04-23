import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const store = new Vuex.Store({

    state : {
        count : 1,
        arrPosts : [],
        arrClientes : [],
        sn_carregando_ajax : false,

        arrDadosCliente : {
            ds_nome : "",
            ds_teste : ""
        }
    },

    actions : {
        loadTest({commit}) {
            axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            ).then(
                data => {
                    console.log(data.data);
                    let arrValores = data.data;
                    commit('setArrPost', arrValores);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        },

        getAjaxListaClietes({commit}) {
            commit('setSnCarregandoAjax', true);

            axios.post(
                'http://localhost:8000/api/get',
                {
                   'ds_chave_sql' : 'listar_clientes'
                }
            ).then(
                data => {
                    commit('setArrClientes', data.data);
                    commit('setSnCarregandoAjax', false);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        },

        postAjaxClientes({commit}, arrNovosDados) {
            let objDados = {
               'ds_entidade' : 'Application\\Entity\\Admin\\Cliente',
               'arrCampoValor' : [
                   {
                     'ds_nome' : arrNovosDados.ds_nome
                   }
               ]
            };

            axios.post(
                'http://localhost:8000/api/post',
                objDados
            ).then(
                data => {

                    console.log('tudo ok:');
                    console.log(data.data);

                    commit('setSnCarregandoAjax', false);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            );
        }
    },

    mutations : {
        setCount(state, payload) {
            state.count = payload;
        },

        setArrPost(state, payload) {
            state.arrPosts = payload;
        },

        setArrClientes(state, payload) {
            state.arrClientes = payload;
        },

        setSnCarregandoAjax(state, payload) {
            state.sn_carregando_ajax = payload;
        },

        setArrDadosCliente(state, payload) {
            state.arrDadosCliente = payload;
        }
    },

    getters: {
        arrDadosCliente: state => {
            return state.arrDadosCliente
        }
    }
});

export default store;