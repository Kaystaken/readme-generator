// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown');


// Array of questions for user input
const questions = [
  {
    type: 'prompt',
    name: 'title',
    message: 'Choose a self-explaining name for your app',
  },
  {
    type: 'prompt',
    name: 'description',
    message: 'What is the app for?',
  },
  {
  type: 'prompt',
  name: 'tableOfContents',
  message: 'Please Write Table of Contents',
  },
  {
    type: 'prompt',
    name: 'installation',
    message: 'Please Specify Installation Instructions',
  },
  {
    type: 'prompt',
    name: 'usages',
    message: 'Enter Usage Information',
  },
  {
    type: 'prompt',
    name: 'contributing',
    message: 'Contribution Guidelines. State if you are open to contributions and what your requirements are for accepting them.',
  },
  {
    type: 'prompt',
    name: 'tests',
    message: '',
  },
  {
    type: 'prompt',
    name: 'githubUsername',
    message: 'Please Enter GitHub Username',
  },

];
//function to write README file
function writeToFile(data) {
  fs.writeToFile('./sample/README.md', generateMarkdown(data), (err) =>
  err ? console.error ('err') || console.log ('Success!')
);
}

//function to initialize app
function init() {
  inquirer
  .prompt(questions)

  .then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeToFile('./sample/README.md', data);
  })
  .catch((error) => {
    console.log(error)
  });

}
// Function call to initialize app
init();
