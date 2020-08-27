// 使用axios 发送请求
import { get } from 'axios'

function getData(){
   return get('/getData').then(data=>{
        // console.log(data);
        let list=data.data.getNewsList;
        // 把数据返回，要用异步的方式
        return Promise.resolve(list)
    })
}

export default {
    getData
}




