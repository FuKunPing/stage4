<template>
    <div>
        <h1>我的购物车</h1>
        <!-- {{cartPro}} -->
        <table cellspacing='0'>
            <tr>
                <td>商品名称</td>
                <td>商品单价</td>
                <td>商品数量</td>
                <td>金额</td>
                <td>操作</td>
            </tr>
            <tr v-for='(p,i) in cartPro' :key='i'>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
                <td>{{p.count}}</td>
                <td>{{p.count*p.price}}</td>
                <td>
                    <span @click="del(i)">删除该商品</span>
                </td>
            </tr>
            <tr v-if="cartPro.length!=0">
                <td colspan=4>合计</td>
                <td>{{total}}</td>
            </tr>
            <tr v-else>
                <td colspan="5" class="empty">
                    <i>购物车空空如也~~~~</i>
                </td>
            </tr>
        </table>
        <button @click="buy">结账</button>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters(['cartPro']),
        // cartPro(){return cartPro}

        // 合计 
        total(){
            // 总金额(遍历购物车，加等于商品数量*金额)
            let sum=0;
            let cart=this.cartPro;
            for(let i=0;i<cart.length;i++){
                sum+=cart[i].price*cart[i].count;
            }
            return sum;

        }
    },    
    methods: {
        ...mapMutations(['removePro','removeAll']),
        del(i){
            // console.log(i);
            this.removePro({idx:i});
        },
        buy(){
            this.removeAll();
        }
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
    .empty{
        color: #ccc;
    }
    span{
        color: rgb(97, 151, 153);   
    }
    span:hover{
        cursor: pointer;
        color: red;
        text-decoration: underline;
    }
</style>