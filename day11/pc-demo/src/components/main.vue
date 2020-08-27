<template>
    <div class='index-wrap'>
        <!-- main组件左侧产品信息和消息 -->
        <div class="index-left">
          <div class="index-left-block">
            <h2>全部产品</h2>
            <AllProducts :list='productList'></AllProducts>
          </div>
          <div class="index-left-block lastest-news">
            <h2>最新消息</h2>
            <NewList></NewList>
          </div>
        </div>
        <!-- main组件右侧幻灯片加产品 -->
          <div class="index-right">
            <!-- 幻灯片组件 -->
              <Slider :imgs='slideArr'></Slider>
            <!-- 产品展示  -->
              <ShowList :list='showList'></ShowList>
          </div>
    </div>
</template>

<script>
import AllProducts from './AllProducts.vue'
import NewList from './NewList'
import Slider from './Slider'
import ShowList from './ShowList'
    export default {
      data(){
        return {
          productList:{ /*产品信息*/ 
                pc:{
                    title:'PC产品',
                    list:[
                        {
                        name: '爱奇艺视频',
                        url: 'http://aqiyi.com'
                        },
                        {
                        name: '优酷视频',
                        url: 'http://youku.com'
                        },
                        {
                        name: '腾讯视频',
                        url: 'http://tenxun.com',
                        hot: true
                        },
                        {
                        name: '搜狐视频',
                        url: 'http://hearstone.com'
                        }
                    ]
                },
                app:{
                  title:'手机类应用',
                  last:true,
                  list:[
                        {
                            name: '淘宝App',
                            url: 'http://www.taobao.com'
                        },
                        {
                            name: '微信',
                            url: 'http://weixin.com',
                            hot: true
                        },
                        {
                            name: '百度地图',
                            url: 'http://maps.com'
                        },
                        {
                            name: '美团外卖',
                            url: 'http://phone.com'
                        } 
                  ] 
                }
          },   
          showList: [// 产品展示
            {
              title: '爱奇艺VIP',
              description: '全球领先的在线视频网站',
              toKey: 'analysis',
              saleout: false,
            },
            {
              title: '优酷VIP',
              description: '这世界很酷',
              toKey: 'count',
              saleout: false,
            },
            {
              title: '腾讯VIP',
              description: '中国领先的在线视频媒体平台',
              toKey: 'forecast',
              saleout: true,
            },
            {
              title: '搜狐VIP',
              description: '中国领先的综合视频网站,正版高清在线观看',
              toKey: 'publish',
              saleout: false,
            }
          ],
          slideArr: [// 幻灯片数据
            {
              src: require("@silde/pic1.jpg"),
              title: "蜘蛛侠"
            },
            {
              src: require("@silde/pic2.jpg"),
              title: "长城"
            },
            {
              src: require("@silde/pic3.jpg"),
              title: "极盗车神"
            },
            {
              src: require("@silde/pic4.jpg"),
              title: "妖猫传"
            }
          ]
        }
      },

    //注册组件
      components:{
        AllProducts,
        NewList,
        Slider,
        ShowList
      }
    }
</script>

<style>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #fff;
  color: #699f00;
  padding: 10px 15px;
  border-bottom:1px solid #699f00;
  border-top:1px solid #699f00;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #666;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 7px;
}
.index-left-block li a {
  color: #666;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item:nth-child(even){
  margin-right: 0;
}

.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-0 .index-board-item-inner {
  background: url(../assets/images/01.jpg) no-repeat;
}
.index-board-1 .index-board-item-inner {
  background: url(../assets/images/02.jpg) no-repeat;
}
.index-board-2 .index-board-item-inner {
  background: url(../assets/images/03.jpg) no-repeat;
}
.index-board-3 .index-board-item-inner {
  background: url(../assets/images/04.jpg) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
  margin-bottom: 20px;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 470px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
