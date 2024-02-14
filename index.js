
// Packages needed for this app
const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");
const generatedMarkdown = require(`./utils/generateMarkdown`);

// Questions array
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Enter Your Email Address.',
    },
    {
        type: 'input',
        name: 'title',
        message:  'What is the title of your project?',
    },
    {
        type:'list',
        name: 'license',
        message: 'What License  would you like to use for your application?',
        choices: ['MIT','APACHE 2.0','GPL v3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be ran to install the dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be ran to run the tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to this repo?',

    }
];

//function to write README file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Initializing the app
function init (){
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({inquirerResponses}));
    });
}

// calling initializition
init();