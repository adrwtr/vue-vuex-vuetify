<template>
    <div class="pt-10">
        Index page

        <v-card
            class="pt-10"
            max-width="500"
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
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
    </div>
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
        computed: {
            ...mapState(
                [
                    'arrClientes'
                ]
            )
        },
    }
</script>