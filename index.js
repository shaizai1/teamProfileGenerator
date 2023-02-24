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
//startProgram()
//async function startProgram(){


//adds new engineer to team array
team.push(new Intern("name",1,"test@test.com", "school name"))

//inquirer questions



//end of questions
let htmlDoc = render(team)

//await
fs.writeFileSync(outputPath,htmlDoc)


//}