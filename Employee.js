// TODO: Write code to define and export the Employee class
const Manager = require("./lib/Manager"); 
const Engineer = require(".lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const inquire = require("inquirer"); 

var teamMembers = []; 
const employeeQuestions = [
  {
    type: "input", 
    name: "name", 
    message: "Employee name: ", 
    validate: async (input) => {
      if (input == "") {
        return "Please enter name."
      } 
      return true;
    }
  }, 
  {
    type: "input", 
    name: "email", 
    message: "E-mail address: ", 
    validate: async (input) => {
      if (input == "") {
        return "Please enter e-mail address."
      } 
      return true;
    }
  },
  {
    type: "list", 
    name: "role", 
    message: "Role of employee: ", 
    choices: ["Engineer", "Intern"] 
  }, 
  {
    when: input => {
      return input.role == "Engineer"
    }, 
    type: "input", 
    name: "github", 
    message: "Enter Github username: ",
    validate: async (input) => {
      if (input == "") {
        return "Please enter a valid username."
      return true;
    }
  }
}, 
  { 
    when: input => {
      return input.role == "Intern"
    }, 
    type: "input", 
    name: "school", 
    message: "Name of school: ",
    validate: async (input) => {
      if (input == "") {
        return "Please enter a valid school.";
      } 
      return true;
    }
  },  
  {
    type: "list", 
    name: "newTeamMember", 
    message: "Would you like to add another team member?", 
    choices: ["Yes", "No"]
  }
]
function getRole(employeeQuestions) {
  return input.role;
};  
function getSchool(employeeQuestions) {
  return input.school; 
}; 






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