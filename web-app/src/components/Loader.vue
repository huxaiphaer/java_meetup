<template>
    <v-progress-linear
            value="15"
            active="loader_status"
            color="primary"
            :indeterminate="loader_status"
            top="top"
            light="light"
            v-show="loader_status"
    ></v-progress-linear>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Loader',
        computed: {
            ...mapGetters('register', ['loader_status']),
        },
    };
</script>

<style scoped></style>
