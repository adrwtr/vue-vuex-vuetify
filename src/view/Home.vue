<template>
    <div>
        Index page
        <br>
        <h1 v-for="(obj, index) in arrPosts" :key="index">
            {{ obj }}
        </h1>
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
            this.$store.dispatch('loadTest');
        },
        computed: {
            ...mapState(
                [
                    'arrPosts'
                ]
            )
        },
    }
</script>