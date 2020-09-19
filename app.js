const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = []

function makeTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(response => {
        if (response.role === "Manager") {
            addManager()
        } else if (response.role === "Engineer") {
            addEngineer()
        } else {
            addIntern()
        }
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Employee ID: ",
            name: "engineerID"
        },
        {
            type: "input",
            message: "Email: ",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Github username:",
            name: "engineerGithub"
        }, 
        {
            type: "list", 
            message: "Would you like to add another member?", 
            name: "newMember", 
            choices: ["Yes", "No"]
        }
    ]).then(answer => {
        const engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub)
        teamMembers.push(engineer)
        if(answer.newMember === 'yes'){
            makeTeam()
        } else {
            createHTML() 
            console.log("Success!")
        }
    });
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "managerName"
        },
        {
            type: "input",
            message: "Employee ID: ",
            name: "managerID"
        },
        {
            type: "input",
            message: "Email: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Office Number: ",
            name: "managerOfficeNumber"
        }, 
        {
            type: "list", 
            message: "Would you like to add another member?", 
            name: "newMember", 
            choices: ["Yes", "No"]
        }
    ]).then(answer => {
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber)
        teamMembers.push(manager)
        if(answer.newMember === 'yes'){
            makeTeam()
        } else {
            createHTML() 
            console.log("Success!")
        }
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "internName"
        },
        {
            type: "input",
            message: "Employee ID: ",
            name: "internID"
        },
        {
            type: "input",
            message: "Email: ",
            name: "internEmail"
        },
        {
            type: "input",
            message: "School: ",
            name: "internSchool"
        }, 
        {
            type: "list", 
            message: "Would you like to add another member?", 
            name: "newMember", 
            choices: ["Yes", "No"]
        }
    ]).then(answer => {
        const intern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internSchool)
        teamMembers.push(intern)
        if(answer.newMember === 'yes'){
            makeTeam()
        } else {
            createHTML() 
            console.log("Success!")
        }
    });
}
function createHTML() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}
makeTeam();