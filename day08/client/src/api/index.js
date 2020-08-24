import {ajax} from 'jquery'

// 获取所有用户信息，发送ajax请求，app.js处理数据库
function getAllEmps(){
  return new Promise((resolve,reject)=>{
    ajax({
      url: 'http://localhost:4000/getAll',
      success(result){
        // console.log(result)
        if(result.status=="SUCCESS"){
          resolve(result.data)
        }else{
          reject('error')
        }
      },
      error(){
        reject('error')
      }
    })
  })
}

// 添加用户
function addEmp(emp){
  // console.log(emp)
    return new Promise((resolve,reject)=>{
		ajax({
			url:"http://localhost:4000/add",
			data:{emp:emp},
			success(result){
				console.log(result)
				resolve(result)
			},
			error(err){
				reject(err)
			}
		})
    })
}

// 管理
function getEmpInfo(empId,empName){
	return new Promise((resolve,reject)=>{
		ajax({
			url:"http://localhost:4000/getEmpInfo",
			data:{empId,empName},
			success(result){
				if(result.status=="SUCCESS"){
					resolve(result.data)
				}else{
					reject("error")
				}
			},
			error(err){
				console.log(err);
				reject(err)
			}
		})
	})
}

// 修改
function modify(filter,data){
	return new Promise((resolve,reject)=>{
		ajax({
		url: 'http://localhost:4000/modify',
		data: {filter,data},
		method: 'post',
		success(res){
			if(res.status=='ERROR'){
				reject("修改失败")
				return ;
			}
			resolve("修改成功")
		},
		error(err){
			console.log(err)
			reject("修改失败")
		}
		})
	})
  }

// 删除
function delEmp(emp){
  return new Promise((resolve,reject)=>{
    ajax({
		url:"http://localhost:4000/delete",
		data:{emp:emp},
		success(result){
			console.log(result);
			resolve(result)
		},
		err(err){
			reject(err)
		}
    })
  })
}




export default {
  getAllEmps,
  addEmp,
  delEmp,
  getEmpInfo,
  modify
}