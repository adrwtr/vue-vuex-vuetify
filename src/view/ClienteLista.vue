<template>
    <div>

    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState(
                [
                    'arrClientes'
                ]
            )
        },

        methods: {

        },

        created () {
            this.$vuetify.theme.dark = true;
            this.$store.dispatch('getAjaxListaClietes');
        },
    }
</script>