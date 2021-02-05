/*
 * @Author: XavierShi
 * @Date: 2021-02-05 14:47:49
 * @LastEditors: XavierShi
 * @LastEditTime: 2021-02-05 17:08:10
 * @Description: Description
 */
const routes = [
    {
        path: '/son/one',
        name: 'sonOne',
        title: 'sonOne',
        component: () =>
            import(/* webpackChunkName: "SonOne" */ '../components/SonOne.vue')
    }
]

export default routes
