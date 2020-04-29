<template>
    <v-col>
        <Loader/>
        <form>
            <v-text-field v-model="name" label="Name" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-text-field v-model="address" label="Address" required></v-text-field>
            <v-text-field v-model="phoneNumber" label="Phone Number" required></v-text-field>
            <v-text-field v-model="password" label="Password" required></v-text-field>
            <v-btn class="mr-4" @click="registerUser">Register</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </form>
        <SnackBar />
    </v-col>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Loader from "./Loader";
    import SnackBar from "./SnackBar";

    export default {
        name: "RegisterUsers",
        components:{
          Loader, SnackBar
        },
        data() {
            return {
                name: '',
                email: '',
                address: '',
                phoneNumber: '',
                password: '',
            }
        },
        methods: {
            registerUser() {
                const formData = {
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    phoneNumber: this.phoneNumber,
                    password: this.password,
                    formHasErrors: false,
                };

                if (!this.validations()) {
                    this.register(formData);
                }
            },
            clear() {

            },
            validations() {
                // eslint-disable-next-line no-useless-escape
                const vm = this;
                setTimeout(() => {
                    vm.reset_snackbar();
                }, 2000);
                if (this.email === '') {
                    this.toast_snackbar_on_error('Email is required');
                    return true;
                }
                if (this.name === '') {
                    this.toast_snackbar_on_error('Name is required');
                    return true;
                }
                if (this.address === '') {
                    this.toast_snackbar_on_error('Address is required');
                    return true;
                }
                if (this.phoneNumber === '') {
                    this.toast_snackbar_on_error('Phone Number is required');
                    return true;
                }
                if (this.password === '') {
                    this.toast_snackbar_on_error('Password  is required');
                    return true;
                }
                return this.formHasErrors;
            },
            ...mapActions({
                register: 'register/registerUsers',
                reset_snackbar: 'register/reset_snackbar',
                toast_snackbar_on_error: 'register/toast_snackbar_on_error',

            }),
            computed: {
                ...mapGetters('register', ['snackbar_status']),
            },

        },
    };
</script>

<style scoped></style>
