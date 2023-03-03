const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");




// TODO: Write Code to gather information about the development team members, and render the HTML file.
//array containing answers from inquirer
let team = [];
startProgram()
async function startProgram(){


//adds new engineer to team array
team.push(new Intern("name",1,"test@test.com", "school name"))

//inquirer questions

const {Title, Description, Contents, Installation, Usage, License, Contributing, Tests, Questions} =
 await inquirer
 .prompt([
    {
        name:'Manager Name',
        message: "Please enter the team manager's name:",
        type: 'input',
        
    },
    {
        name:'Manager ID ',
        message: "Please enter the team manager's employee ID:",
        type: 'input',
        
    },
    {
        name:'Manager email',
        message: "Please enter the team manager's email address:",
        type: 'input',
    },
    {
        name:'Manager office',
        message: "Please enter the team manager's office number:",
        type: 'input',
       
    },
    {
        name:'Option',
        message: "Would you like to add another member of the team?",
        type: 'checkbox',
        choices: ["Add an engineer","Add an intern","Finish building the team"],
        
    },
   
])




//end of questions
let htmlDoc = render(team);

//await
fs.writeFileSync(outputPath,htmlDoc);


}