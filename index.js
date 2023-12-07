// TODO: Include packages needed for this application
const inquier = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({title, Description, TableOfContents, Installation, Usages, Contribution, Tests, Questions}) =>
`
`;
//paste created README here including ${description} ${tableOfContents} {installation} ${usages} ${contribution} ${tests} ${questions} in the back ticks
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'prompt',
    name: 'title',
    message: 'What is the app called?',
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
  name: 'contributions',
  message: 'Contribution Guidelines',
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
inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeToFile('README.md', readmeContent);
  })
  .catch((error) => {
    console.log(error)
  });
// TODO: Create a function to write README file

//paste README here and ${description} ${tableOfContents} {installation} ${usages} ${contribution} ${tests} ${questions}
