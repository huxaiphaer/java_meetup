import RegisterUsers from "@/components/RegisterUsers";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils"
import Vue from 'vue';
import Vuex from "vuex"
import Vuetify from 'vuetify'

const localVue = createLocalVue()
Vue.use(Vuex)
Vue.use(Vuetify)

const store = new Vuex.Store({
  state: {
    snackbar: {
      snackbar_visibility: false,
      color: "",
      timeout: 0,
      message: ""
    },
    loader: false,
  }
})

describe("Register.vue", () => {

  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it("should have a regsiterUsers component and match snapshot", () => {
    const wrapper = shallowMount(RegisterUsers, {
      vuetify,
      store,
      localVue
    })
    expect(wrapper.html()).toMatchSnapshot()

  });
});
