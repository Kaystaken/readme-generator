// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./questions');
const { generateMarkdown } = require('./generateMarkdown');

function init() {
  inquirer.prompt(questions)
    .then(generateReadMe);
}

const generateReadMe = (data) => {
  const fileName = `./sample/README.md`;
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, () => {});
};

// Function call to initialize app
init();
