// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./questions');
const {generateMarkdown, renderTitleSection, renderDescriptionSection, renderTableOfContents, renderBasicSection, renderQuestionsSection} = require('./generateMarkdown');
const {renderLicenseSection} = require('./generateMarkdown.js');

function init() {
  inquirer.prompt(questions)
    .then(generateReadMe);
}

const generateReadMe = ({ title, description, installation, usage, contributing, tests, license, github, email }) => {
  const fileName = `./sample/README.md`;
  const titleSection = renderTitleSection(title, license);
  const descriptionSection = renderDescriptionSection(description);
  const tableOfContents = renderTableOfContents();
  const licenseSection = renderLicenseSection(license);
  const questionsSection = renderQuestionsSection(github, email);
  fs.writeFile(fileName, 
    `${titleSection}${descriptionSection}${tableOfContents}${renderBasicSection('Installation', installation)}${renderBasicSection('Usage', usage)}${licenseSection}${renderBasicSection('Contributing', contributing)}${renderBasicSection('Tests', tests)}${questionsSection}`, () => {});
};

// Function call to initialize app
init();
      
