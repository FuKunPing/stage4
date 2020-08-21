// 封装员工类

export default class Emp{
  constructor(empId,empName,gender,age,position,telephone,address,edu){
    this.empId = empId;
    this.empName = empName;
    this.gender = gender;
    this.age = age;
    this.position = position;
    this.telephone = telephone;
    this.address = address;
    this.edu = edu;
  }
}