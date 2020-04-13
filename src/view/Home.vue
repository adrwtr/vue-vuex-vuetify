<template>
    <div>Index page</div>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        created () {
            this.$vuetify.theme.dark = true
        },
    }
</script>