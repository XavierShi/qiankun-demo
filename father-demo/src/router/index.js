/*
 * @Author: XavierShi
 * @Date: 2021-02-05 15:05:37
 * @LastEditors: XavierShi
 * @LastEditTime: 2021-02-05 15:51:20
 * @Description: Description
 */
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home/one',
        name: 'homeOne',
        title: 'homeOne',
        component: () =>
            import(/* webpackChunkName: "HomeOne" */ '../components/HomeOne.vue')
    },
    {
        path: '/home/two',
        name: 'homeTwo',
        title: 'homeTwo',
        component: () =>
            import(/* webpackChunkName: "HomeTwo" */ '../components/HomeTwo.vue')
    }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
