<template>
    <div>
        <h1>商品列表</h1>
        <table cellspacing='0'>
            <tr>
                <td>商品编号</td>
                <td>商品名称</td>
                <td>商品单价</td>
                <td>操作</td>
            </tr>
            <tr v-for='(p,i) in prods' :key='i'>
                <td>{{p.id}}</td>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
                <td>
                    <button @click="reduce(p)">-</button>&nbsp;
                    <button @click='add(p)'>+</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex';

export default {
    data(){
        return {
            prods:[
                {id:1,name:"海尔",price:3000,count:1},
                {id:2,name:"华为",price:4000,count:1},
                {id:3,name:"小米",price:2000,count:1},
                {id:4,name:"联想",price:4500,count:1},
                {id:5,name:"戴尔",price:3500,count:1},
            ]
        }
    },
    methods: {
        ...mapMutations(['addPro','addCount','reduceCount']),
        add(p){
            // console.log(p);
            let cart=this.cartPro;
            let f=false;//假设购物车没有库存中的数据
            for(let i=0;i<cart.length;i++){
                if(p.name==cart[i].name){
                    // 有重复的
                    f=true;
                    // 重复，购物车数量增加(vuex里的值并没有添加成功)
                    // cart[i].count++;
                    // mutations里的方法修改products里的count
                    this.addCount({
                        idx:i
                    })
                    break;
                }
            }
            if(!f){
                // 没有,添加到购物车
                this.addPro({
                    pro:p
                });
            }
        },
        reduce(p){
            // console.log(p);
            // 不能直接传下标，因为点击的时候顺序不一样，比如点戴尔添加，vuex下标戴尔是0，但是prods的0下标是海尔
            // this.reduceCount({idx:i})
            this.reduceCount({name:p.name})
            
        }
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['cartPro'])
    },
}
</script>

<style scoped>
    table{
        width: 60%;
        margin: 0 auto;
        border:1px solid black;
    }    
    td{
        border: 1px solid black;
        line-height: 30px;
    }
    button{
        width: 30%;
    }

</style>