<template>
    <div>
        teste - {{ count }}
        <br>
        <a @click="increment">Increment++</a>
        <br>
        <a @click="decrement">Decrement--</a>
    </div>
</template>

<script>
    export default {
        computed: {
            count : {
                set(v) {
                    this.$store.commit('setCount', v);
                },
                get() {
                    return this.$store.state.count;
                }
            }
        },
        methods: {
            increment() {
                this.count = this.count + 1;
            },
            decrement() {
                this.count = this.count - 1;
            }
        },
        props: {
            source: String,
        },
        data: () => ({

        }),
        created () {
            this.$vuetify.theme.dark = true
        },
    }
</script>