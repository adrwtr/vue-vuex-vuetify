<template>
    <div class="pt-10">
        Bem vindo ao novo projeto do UNICONTROLE
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        }),
        created () {
            this.$vuetify.theme.dark = true;
        },
        computed: {
        },
    }
</script>