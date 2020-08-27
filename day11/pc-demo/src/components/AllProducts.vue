<template>
    <div>
        <div v-for='(item,index) in list' :key="index">
            <h3>{{item.title}}</h3>
            <ul>
                <li v-for='(i,idx) in item.list' :key="idx">
                    <a :href="i.url" :class="{'hot-tag':i.hot}">{{i.name}}</a>
                </li>
            </ul>
            <hr v-if='!item.last' class="hr">
            <!-- <h3>{{productList.app.title}}</h3>
            <ul>
                <li v-for='(item,idx) in productList.app.list' :key="idx">
                    <a :href="item.url" :class='{"hot-tag":item.hot}'>{{item.name}}</a>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>