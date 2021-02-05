<!--
 * @Author: XavierShi
 * @Date: 2021-02-05 15:49:21
 * @LastEditors: XavierShi
 * @LastEditTime: 2021-02-05 17:22:37
 * @Description: Description
-->
<template>
    <div>
        <div>22222</div>
        <div>{{ $store.state.two.info.name }}</div>
        <div>{{ $store.state.two.info.com }}</div>
        <ul>
            <li v-for="(item, index) in $store.state.two.list" :key="index">
                {{ item }}
            </li>
        </ul>
        <ul>
            <li v-for="(item, index) in $store.state.one.list" :key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="setHomeone">setHomeone</button>
        <button @click="setHomeone2">setHomeone2</button>
    </div>
</template>

<script>
export default {
    methods: {
        setHomeone() {
            let list = this.$store.state.one.list
            list.push(new Date().getTime())
            this.$store.commit('setHomeone', {
                status: 'one',
                list,
                info: {
                    name: 'homeone',
                    com: 1
                }
            })
        },
        setHomeone2() {
            let list = this.$store.state.one.list
            list.push(new Date().getTime())
            this.$store.commit('setHomeoneList', list)
        }
    }
}
</script>

<style lang="less" scoped></style>
