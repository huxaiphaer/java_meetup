<template>

    <v-col class="pa-lg-10">
        <v-card class=" mx-auto">
            <form class="pa-10">
                <p class="reg-text">Java MeetUp Registration</p>
                <v-text-field v-model="name" label="Name" required></v-text-field>
                <v-text-field v-model="email" label="E-mail" required></v-text-field>
                <v-text-field v-model="address" label="Address" required></v-text-field>
                <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
                <v-text-field v-model="password" label="Password" :type="'password'" required></v-text-field>
                <v-btn class="mr-4" color="primary" @click="registerUser">Register</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </form>
        </v-card>
        <SnackBar/>
    </v-col>


</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import SnackBar from "./SnackBar";

    export default {
        name: "RegisterUsers",
        components: {
            SnackBar
        },
        data() {
            return {
                name: '',
                email: '',
                address: '',
                phoneNumber: '',
                password: '',
                formHasErrors: false,
            }
        },
        methods: {
            registerUser() {
                const formData = {
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    number: this.phoneNumber,
                    password: this.password,
                };

                if (!this.validations()) {
                    this.register(formData);
                }
            },
            clear() {
                this.name = "";
                this.email = "";
                this.address = "";
                this.phoneNumber = "";
                this.password = "";
            },
            validations() {
                // eslint-disable-next-line no-useless-escape
                const mailFormat = /\S+@\S+\.\S+/;
                const vm = this;
                setTimeout(() => {
                    vm.reset_snackbar();
                }, 2000);
                if (this.email === '') {
                    this.toast_snackbar_on_error('Email is required');
                    return true;
                }

                if (mailFormat.test(this.email.toString()) !== true) {
                    this.toast_snackbar_on_error('Please enter a valid mail');
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

<style scoped>
    .reg-text {
        color: black;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
</style>
