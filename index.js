// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{ 
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines for your project.',
},
{
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project.',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},
{
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub profile link.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your email address.',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README.md file has been generated.')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((responses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
