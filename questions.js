module.exports = [
  {
    type: 'input',
    name: 'title',
    message: 'Whats the title of your page',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a brief description of your page',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please Specify Installation Instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter Usage Information',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution Guidelines. State if you are open to contributions and what your requirements are for accepting them.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Specify tests used',
  },
  {
    type: 'list',
    message: 'Choose from the licenses below:',
    name: 'license',
    choices: ['Apache', 'GNU (GPL v3)', 'MIT', 'N/A'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'If there are any questions leave your Github profile for them to reach you',
  },
  {
    type: 'input',
    name: 'email',
    message: 'If there are any questions leave your email address for them to reach you'
  }
];