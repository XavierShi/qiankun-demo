/*
 * @Author: XavierShi
 * @Date: 2021-02-05 15:05:17
 * @LastEditors: XavierShi
 * @LastEditTime: 2021-02-05 17:33:29
 * @Description: Description
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        one: {
            status: 'one',
            list: [],
            info: {
                name: 'homeone',
                com: 1
            }
        },
        two: {
            status: 'two',
            list: [],
            info: {
                name: 'hometwo',
                com: 2
            }
        }
    },
    mutations: {
        setHomeone(state, payload) {
            state.one = payload
        },
        setHometwo(state, payload) {
            state.two = payload
        },
        setHomeoneList(state, payload) {
            state.one.list = payload
        }
    },
    actions: {},
    plugins: [new VuexPersistence().plugin]
})

export default store
