// imports
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "input",
    message: "What is the title for your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license was used for this README?",
    name: "license",
    choices: ["Apache", "MIT", "ISC", "GNU GPLv3", "None",],
  },

  {
    type: "input",
    message: "Please add contributors",
    name: "contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "test",
  },
];

// Writing to a file
function createFile(fileName, data) {
  fs.writeFile("./utils/generateMarkdown" + fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
  });
}

// initialization function
function init() {
  inquirer.prompt(questions).then(function (data) {
    createFile("README.md", generateMarkdown(data));
  });
}

// run the app
init();
