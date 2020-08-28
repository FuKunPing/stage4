<template>
    <div>
        <m-header></m-header>
        <Tab></Tab>
        <!-- 路由渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
    components:{
        MHeader,
        Tab
    }
}
</script>