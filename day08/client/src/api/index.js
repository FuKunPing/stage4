import {ajax} from 'jquery'

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



export default {
  getAllEmps,
  addEmp
}