// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const AsyncFile = util.promisify(fs.watchFile)

// TODO: Create an array of questions for user input
function AskUser (){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the project?',
            name: 'Title'

        }
    ])
}
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
