<!--
 * @Author: XavierShi
 * @Date: 2021-02-05 15:06:40
 * @LastEditors: XavierShi
 * @LastEditTime: 2021-02-05 16:09:13
 * @Description: Description
-->
<template>
    <div>
        <div>11111</div>
        <div>{{ $store.state.one.info.name }}</div>
        <div>{{ $store.state.one.info.com }}</div>
        <ul>
            <li v-for="(item, index) in $store.state.one.list" :key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="setNewDate">new Date</button>
        <button @click="setHometwo">setHometwo</button>
    </div>
</template>

<script>
export default {
    methods: {
        setHometwo() {
            let list = this.$store.state.two.list
            // eslint-disable-next-line no-unreachable
            list.push(new Date().getTime())
            this.$store.commit('setHometwo', {
                status: 'two',
                list,
                info: {
                    name: 'hometwo',
                    com: 1
                }
            })
        },
        setNewDate() {
            console.log(new Date().getTime())
        }
    }
}
</script>

<style lang="less" scoped></style>
