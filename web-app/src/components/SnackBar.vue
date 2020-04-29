<template>
    <v-snackbar :value="true" v-show="snackbar_status.snackbar_visibility" :bottom="true"
                :color="snackbar_status.color" :right="true" :timeout="0">
        {{ snackbar_status.message }}
    </v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'SnackBar',
        computed: {
            ...mapGetters('register', ['snackbar_status']),
        },
    };
</script>

<style scoped></style>
