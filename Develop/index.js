// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); 
const generatorMarkdown = require("./generateMarkdown");

const AsyncFile = util.promisify(fs.watchFile)

// TODO: Create an array of questions for user input
function AskUser (){
    return inquirer.prompt([
      {
        type: "input",
        message: "What is the name of the project?",
        name: "title",
      },
      {
        type: "input",
        message: "Enter a description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What technologies need to be installed for your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is this App going to be used for?",
        name: "usage",
      },

      {
        type: "checkbox",
        message: "Select a license for this project.",
        choices: ["Apache", "GNU GPLv3", "ISC", "MIT"],
        name: "license",
      },
      {
        type: "input",
        message: "Please list all contributors for this project.",
        name: "contributors",
      },
      {
        type: "input",
        message: "How do you test your app?",
        name: "test",
      },
    ]);
}
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
