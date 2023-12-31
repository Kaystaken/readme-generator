function renderTitleSection(title, license) {
  const licenseBadge = renderLicenseBadge(license);
  return `# ${title} ${licenseBadge}\n`;
}

function renderDescriptionSection(description) {
  return `## Description\n${description}\n`;
}

function renderTableOfContents() {
  // Installation, Usage, License, Contributing, Tests, and Questions
  return `## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)\n`;
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
  return `## License\n${renderLicenseBadge(license)}\n`;
}

function renderQuestionsSection(github, email) {
  return `## Questions
If there are any questions, please check my [Github profile](https://www.github.com/${github})
Or email me at [${email}](mailto:${email})`;
}

//Function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contributing, tests, license, github, email }) {
  const titleSection = renderTitleSection(title, license);
  const descriptionSection = renderDescriptionSection(description);
  const tableOfContents = renderTableOfContents();
  const licenseSection = renderLicenseSection(license);
  const questionsSection = renderQuestionsSection(github, email);

  return titleSection + descriptionSection + tableOfContents +
    renderBasicSection('Installation', installation) + renderBasicSection('Usage', usage) +
    licenseSection + renderBasicSection('Contributing', contributing) + renderBasicSection('Tests', tests) +
    questionsSection;
}

module.exports = { generateMarkdown };