import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const store = new Vuex.Store({
    state : {
        count : 1,
        arrPosts : [],
        arrClientes : [],
        sn_carregando_ajax : false
    },

    actions : {
        loadTest({commit}) {
            console.log('aqui 2');
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

            axios.get(
                'http://localhost:8000/api/get'
            ).then(
                data => {
                    console.log(data.data);
                    //let arrValores = data.data;
                    commit('setSnCarregandoAjax', false);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
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
        }
    }
});

export default store;