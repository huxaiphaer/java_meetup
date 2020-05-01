import axios from "axios";
import {BASE_URL} from "../../utils/Urls";

export default {
    namespaced: true,
    state: {
        snackbar: {
            snackbar_visibility: false,
            color: "",
            timeout: 0,
            message: ""
        },
        loader: false,
    },

    mutations: {
        reset_snackbar(state) {
            state.snackbar.message = '';
            state.snackbar.color = '';
            state.snackbar.timeout = 0;
            state.snackbar.snackbar_visibility = false;
        },

        toast_snackbar_on_success(state) {
            state.snackbar.message = 'User registered up Successfully';
            state.snackbar.color = '#4CAF50';
            state.snackbar.timeout = 1000;
            state.snackbar.snackbar_visibility = true;
        },
        toast_snackbar_on_error(state, message) {
            state.snackbar.message = message;
            state.snackbar.color = '#9c4130';
            state.snackbar.timeout = 1000;
            state.snackbar.snackbar_visibility = true;
        },

        loader_on(state) {
            state.loader = true;
        },

        loader_off(state) {
            state.loader = false;
        },


    },
    actions: {
        toast_snackbar_on_error({commit}, message) {
            commit('toast_snackbar_on_error', message);
        },
        reset_snackbar({commit}) {
            commit('reset_snackbar');
        },
        registerUsers({commit}, data) {
            commit('loader_on');
            axios
                .post(`${BASE_URL}/api/v1/users`, data)
                .then(response => {
                    if (response.status == 200) {
                        setTimeout(() => {
                            commit('reset_snackbar');
                        }, 2000);
                        commit('toast_snackbar_on_success');
                        commit('loader_off');

                    } else if (response.status == 400) {
                        console.log(" whats here  " + response)
                        commit('toast_snackbar_on_error', response);
                        commit('loader_off');
                    }
                })
                .catch(error => {
                    console.log(" error " + error.response.data)
                    error.response.data.errors.map((t) => {
                        commit('toast_snackbar_on_error', t);
                    })
                    commit('loader_off');
                });
        }
    },
    getters: {
        snackbar_status(state) {
            return state.snackbar;
        },
        loader_status(state) {
            return state.loader;
        },

    }
};
