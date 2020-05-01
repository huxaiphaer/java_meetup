import register from "@/store/modules/register";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Loader from "../../src/components/Loader";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe("Loader.vue", () => {
  let vuetify;
  let store;
  beforeEach(() => {
    store = new Vuex.Store({ modules: { register } });
  });

  it("should have a Loader component and match snapshot", () => {
    const wrapper = shallowMount(Loader, {
      vuetify,
      store,
      localVue
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
