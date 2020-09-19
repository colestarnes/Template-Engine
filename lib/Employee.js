class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  
  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
    console.log(`Role: ${this.role}`);
  }
}
module.exports = Employee;


// var express = require('express'); 
// const inquirer = require('inquirer');
// var app = express();

// function question(){
// return inquirer.prompt([
// {
//   type: "input", 
//   name: "name", 
//   message: "Name: "
// }, 
// {
//   type: "input", 
//   name: "id", 
//   message: "ID: " 
// }, 
// {
//   type: "input", 
//   name: "email", 
//   message: "E-mail: "
// }, 
// {
//   type: "list", 
//   name: "role", 
//   choices: [
//     "Engineer", 
//     "Manager", 
//     "Intern"
//   ]
// }
// ])}; 

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/main.html')
// }); 

// app.get('/engineer', function(req, res){
//   res.render('engineer')
// })

// app.listen(3000);