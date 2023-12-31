// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./questions');
const {generateMarkdown, renderTitleSection, renderDescriptionSection} = require('./generateMarkdown');
const {renderLicenseSection} = require('./generateMarkdown.js');

function init() {
  inquirer.prompt(questions)
    .then((answers) => { console.log('answers:', answers); });
}

const generateReadMe = ({ title, description, installation, usage, contributing, tests, license, questions, repository })
// Create a function to write README file
.then((data) => {
  const fileName = `./sample/README.md`;
  const titleSection = renderTitleSection(title, license);
  const descriptionSection = renderDescriptionSection(description);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
      fs.writeFile(fileName, 
        ` ${titleSection}
          ${descriptionSection}

          ## Table of Contents:
          ${Object.keys(data)
          .filter(key => (key !== 'title' && key !== 'user' && data[key]))
          .map(key => `- [${capKey(key)}](#${key})  \n`)
         .join('')}

          ## Installation
          ${data.installation}

          ## Usage
          ${data.usage}

          ## Licenses
           ${data.license}
          ${licenseLink}
          ${licenseSection}

          ## Credits
          ${data.credits}

          ## Technologies:
          ${data.technologies}
          ${data.technologies.length !== 0 ? `

          ## Contributing
          ${data.contributing}
          Contributions are always welcome. Here's how:

          1. Fork the repository to GitHub.

          2. Clone your forked repository to local machine with these instructions:
        <pre>
        - git clone ${data.repository}
        - git checkout -b feature-name
        - git commit -m "Brief description of your changes"
        - git push origin feature-name
        </pre>` : ``}

        ## Test
        ${data.test}
        
        ## Questions:
       ${data.questions}

        ## Repository:
        ${data.repository}`);
        });

// Function call to initialize app
init();
      
