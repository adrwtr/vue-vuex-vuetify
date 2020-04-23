<template>
    <div class="pt-10">
        Index page
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