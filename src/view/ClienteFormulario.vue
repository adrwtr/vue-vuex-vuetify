<template>
    <div>
        <form>
            <v-text-field
                v-model="arrClientes.ds_nome"
                :counter="10"
                label="Nome"
                required
            ></v-text-field>

            <v-text-field
                v-model="arrClientes.ds_teste"
                label="Teste"
                required
            ></v-text-field>


            <v-btn class="mr-4" @click="enviarForm">submit</v-btn>
            </form>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapState(
                [
                    'arrClientes'
                ]
            )
        },

        methods: {
            ...mapActions(
                [
                    'postAjaxClientes'
                ]
            ),

            enviarForm() {
                this.postAjaxClientes(
                    this.arrClientes
                );
            }
        },

        created () {
            this.$vuetify.theme.dark = true;
            // this.$store.dispatch('getAjaxListaClietes');
        },
    }
</script>