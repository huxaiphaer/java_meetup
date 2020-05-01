import RegisterUsers from "@/components/RegisterUsers";
import register from '@/store/modules/register'
import {createLocalVue, mount, shallowMount} from "@vue/test-utils"
import Vuex from "vuex"
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)


describe("Register.vue", () => {

    let vuetify
    let store;
    beforeEach(() => {
        store = new Vuex.Store({modules: {register}})
    })

    it("should have a regsiterUsers component and match snapshot", () => {

        const wrapper = shallowMount(RegisterUsers, {
            vuetify,
            store,
            localVue
        })
        expect(wrapper.html()).toMatchSnapshot()
    });

    it("should expect an error when missing Name", async () => {

        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,

        });

        wrapper.setData({
            name: '',
            email: 'ab@gmail.com',
            address: 'Buziga, Kampala',
            phoneNumber: '0704594180',
            password: '9393939',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    });

    it("should expect an error when missing email", async () => {
        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,

        });

        wrapper.setData({
            name: 'huxy',
            email: '',
            address: 'Buziga, Kampala',
            phoneNumber: '0704594180',
            password: '9393939',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    })

    it("should expect an error when missing address", async () => {
        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,

        });

        wrapper.setData({
            name: 'huxy',
            email: 'huxy@gmail.com',
            address: '',
            phoneNumber: '0704594180',
            password: '9393939',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    })

    it("should expect an error when missing phone number", async () => {
        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,

        });

        wrapper.setData({
            name: 'huxy',
            email: 'huxy@gmail.com',
            address: 'Buziga',
            phoneNumber: '',
            password: '9393939',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    })

    it("should expect an error when missing password", async () => {
        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,
        });

        wrapper.setData({
            name: 'huxy',
            email: 'huxy@gmail.com',
            address: 'Buziga',
            phoneNumber: '0896876786',
            password: '',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    })
    it("should expect an error when missing email doesn't meet conditions", async () => {
        const wrapper = mount(RegisterUsers, {
            localVue,
            vuetify,
            store,

        });

        wrapper.setData({
            name: 'huxy',
            email: 'huxygmail',
            address: 'Buziga',
            phoneNumber: '0896876786',
            password: '737738hdhygfuy',
            formHasErrors: false,
        });

        const button = wrapper.find({name: 'v-btn'})
        button.trigger('click');
        await wrapper.vm.$nextTick()
    })
});



