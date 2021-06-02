var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/pagetemplate.js");

var employeeMembers = [];
var employeeIds = [];

function menu() {
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the Intern's name?",
                validate: answer => {
                    if (answer !== "")
                        return true;
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "id",
                message: "What's the Intern's Id?",
                
            },
            {
                type: "input",
                name: "email",
                message: "What's the Intern's Email?",
                   
            },
            {
                type: "input",
                name: "school",
                message: "What school did you go to?",
                
            }
        ]) .then(answers => {
            const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
            employeeMembers.push(intern);
            employeeIds.push(answers.id);
            createTeam();
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the Engineer's name?",
                validate: answer => {
                    if (answer !== "")
                        return true;
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "id",
                message: "What's the Engineer's Id?",
                
            },
            {
                type: "input",
                name: "email",
                message: "What's the manager's Email?",
                   
            },
            {
                type: "input",
                name: "github",
                message: "What's your github account?",
                
            }
        ]) .then(answers => {
            const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
            employeeMembers.push(engineer);
            employeeIds.push(answers.id);
            createTeam();
        })
    }

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
                validate: answer => {
                    if (answer !== "")
                        return true;
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's Id?",
                
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's Email?",
                   
            },
            {
                type: "input",
                name: "managerNumber",
                message: "What's the manager's Office Number?",
                
            }
        ]) .then(answers => {
            const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerNumber);
            employeeMembers.push(manager);
            employeeIds.push(answers.managerId);
            createTeam();
        })
    }
    function createTeam() {
        console.log("enteredcreate team");
        inquirer.prompt([
            {
                type: "list",
                name: "employeeChoice",
                message: "Which employee are you adding?",
                choices: [
                    "engineer",
                    "intern",
                    "exit"
                ]
            }
        ]).then(answer => {
            if (answer.employeeChoice == "engineer") {
               createEngineer();
            }else if (answer.employeeChoice ==  "intern") {
                createIntern();
            }else if (answer.employeeChoice == "exit") {
                buildTeam();
            }
        })
    }
    
    function buildTeam() {
        console.log("buildingteam");
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(employeeMembers), "utf-8");
    }

    createManager();
}

menu();