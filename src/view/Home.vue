<template>
    <div>
        Index page
        <br>
        <h3 v-for="(obj, index) in arrPosts" :key="index">
            {{ obj.id }} {{ obj.title }} <br>
        </h3>
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