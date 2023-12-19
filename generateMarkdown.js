// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(badge) {
  if (badge == 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

} else   if (badge == 'Apache') {
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';

} else if (badge == 'GNU (GPL v3)') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';

//function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(Apache) {
  return'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
}
} else {
  return '';
}
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {
  return '[![License: MIT](https://opensource.org/licenses/MIT)';

} else   if (license == 'Apache') {
  return '[![License](https://opensource.org/licenses/Apache-2.0)';

} else if (license == 'GNU (GPL v3)') {
  return '[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';

//function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(Apache) {
  return'[![License](https://opensource.org/licenses/Apache-2.0)';
}
} else {
  return '';
}
}


module.exports = generateMarkdown;
// Function to generate markdown for README
function generateMarkdown(data) {

  // Function to capitalize words
  const capKey = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const licenseDetails = data.licenses.map(license => {
    return {
      badge: renderLicenseBadge(license),
      link: renderLicenseLink(license),
    }
  })

  //Creating the README content:
  return `${licenseDetails.map(license => `${license.badge}${license.link}`).join(' ')}
# ${data.title} \n

## Description:
${data.description}

## Table of Contents:
${Object.keys(data)
      .filter(key => (key !== 'title' && key !== 'extra' && key !== 'user' && data[key]))
      .map(key => `- [${capKey(key)}](#${key})  \n`)
      .join('')}

##Installation
${data.installation}

##Usage:
${data.usage}

##Licenses:
${data.licenses.includes('N/A') ? "This project is unlicensed." : "This project is licensed under the following:"}

${data.licenses
      .filter(license => license !== 'N/A')
      .map(license => `- [${license}]${renderLicenseLink(license)}`).join('\n')}

${data.technologies.length !== 0 ? `
##Technologies:
To create this app, I used the following technologies:
${data.technologies.map(tech => `- ${tech}`).join('\n')}
` : ``}

##Repository:
Here is the [link](${data.repository}) to the repository of this project:\n
- [${data.repository}](${data.repository})

${data.contributing.includes('Definitely') ? `

##Contributing

Contributions are always welcome. Here's how:

1. Fork the repository to GitHub.

2. Clone your forked repository to local machine with these instructions:
<pre>
  - git clone ${data.repository}
  - git checkout -b feature-name
  - git commit -m "Brief description of your changes"
  - git push origin feature-name
</pre>` : ``}

${data.extra !== '' ? `**Note:** ${data.extra}` : ``}


${data.tests !== '' ? `## Test:
To run tests, run the command: \n
 ${data.tests}` : ``}


${data.user !== '' ? `## Questions:
**My GitHub Profile:**  \n
https://github.com/${data.user}` : ``}

${data.questions !== '' ? `
You can reach me @[${data.questions}](mailto:${data.questions}) if you have any questions.

Thank you! :)

` : ``}`
}

// Exporting the generateMarkdown function
module.exports = generateMarkdown;