<template>
    <v-container fluid>
        <v-row
            no-gutters
        >
            <v-col>
                <v-card
                    outlined
                    v-for="(obj, index) in arrClientes" :key="index"
                >
                    <v-list-item one-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                {{ obj.id }} {{ obj.ds_nome }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text @click="goToUrl('http://terra.com.br')">
                            <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
                            &nbsp;Portal
                        </v-btn>
                        <v-btn text @click="goToUrl('http://google.com')">
                            <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
                            &nbsp;Portal Admin
                        </v-btn>
                        <v-btn text>
                            <v-icon>mdi-sticker-check</v-icon>
                            &nbsp;Testar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data: () => ({
            drawer: null,
        }),
        created () {
            this.$vuetify.theme.dark = true;
            this.$store.dispatch('getAjaxListaClietes');
        },
        methods: {
            goToUrl: function(ds_url) {
                window.open(ds_url);
                return true;
            }
        },
        computed: {
            ...mapState(
                [
                    'arrClientes'
                ]
            )
        },
    }
</script>