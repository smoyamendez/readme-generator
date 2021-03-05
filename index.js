// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of this project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does the user run this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What licensing would you like this project to have?',
        name: 'license',
        choices: ['MIT', 'GNU 3.0', 'ISC'],
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How does the user test this program?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Are there any questions regarding this project, if so, what are they?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
]

 

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName + '.md',answers, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("File generated")
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers.title,generateMarkdown(answers));
     } )
}

// Function call to initialize app
init();
