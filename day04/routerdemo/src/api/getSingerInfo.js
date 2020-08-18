// 引入Jquery

// 引入全部Jquery
// import $ from 'jquery' 
// 只引入Ajax方法
import {ajax} from 'jquery'

export function getSingerInfo(name){
  return new Promise((resolve,reject)=>{
    ajax({
      url: '/getSinger?name='+name,
      success:data=>{
        return resolve(data)
      },
      error: err=>{
        return reject(err)
      }
    })
  })
}




 