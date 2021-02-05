<template>
    <div id="app">
        <router-link to="/home/one">HomeOne</router-link>
        <router-link to="/home/two">HomeTwo</router-link>
        <router-view />
        <div id="hometwo-app"></div>
    </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun'
export default {
    name: 'App',
    components: {},
    mounted() {
        registerMicroApps([
            {
                name: 'son-demo',
                entry: '//localhost:8082',
                container: '#hometwo-app',
                activeRule: '/home/two'
            }
        ])
        start()
    }
}
</script>

<style lang="less" scoped>
a {
    margin-left: 50px;
}
#hometwo-app {
    height: 1000px;
}
</style>
