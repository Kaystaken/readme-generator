function renderTitleSection(title, license) {
  const licenseBadge = renderLicenseBadge(license);
  return `# ${title} ${licenseBadge}\n`;
}

function renderDescriptionSection(description) {
  return `## Description\n${description}\n`;
}

function renderTableOfContents() {
  // Installation, Usage, License, Contributing, Tests, and Questions
  return `## Table of Contents:\n
    - [Installation](#Installation)\n
    - [Usage](#Usage)\n
    - [License](#License)\n
    - [Contributing](#Contributing)\n
    - [Tests](#Tests)\n
    - [Questions](#Questions)\n`;
}

function renderBasicSection(name, details) {
  return `## ${name}\n${details}\n`;
}

function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  }
  // If there is no license, return an empty string
  else {
    return '';
  }
}
//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === 'GNU') {
    return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === 'MIT'){
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
  }
  // If there is no license, return an empty string
  else {
    return '';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `## License\n${renderLicenseLink(license)}\n`;
}

function renderQuestionsSection(github, email) {
  return `## Questions\n
    If there are any questions, please check my [Github profile](https://www.github.com/${github})\n
    Or email me at ${email}\n`;
}
//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = { generateMarkdown, renderTitleSection, renderDescriptionSection, renderTableOfContents, renderBasicSection, renderLicenseSection, renderQuestionsSection };