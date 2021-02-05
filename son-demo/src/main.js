import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import routes from './router'
import './public-path'

Vue.config.productionTip = false

export async function bootstrap() {
    console.log('react app bootstraped')
}

export async function mount(props) {
    const { container, routerBase } = props
    console.log('react app mount', props)
    const router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__
            ? routerBase
            : 'http://192.168.191.93:8081',
        routes,
        mode: 'history'
    })
    new Vue({
        render: h => h(App),
        store,
        router
    }).$mount(container ? container.querySelector('#app') : '#hometwo-app')
}

export async function unmount(props) {
    console.log('react app unmount', props)
}

// export async function update(props) {
//     console.log('update props', props)
// }
