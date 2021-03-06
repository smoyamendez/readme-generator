// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license === 'GNU 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[![MIT Link](https://opensource.org/licenses/MIT)'
  };
  if (license === 'GNU 3.0') {
    return '[![GPL v3 Link](https://www.gnu.org/licenses/gpl-3.0)]'
  };
  if (license === 'ISC') {
    return '[![ISC Link](https://opensource.org/licenses/ISC)]'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  ---
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
---
${answers.description}

## Installation 
---
${answers.installation}

## Usage
---
${answers.usage}

## License 
---
${answers.license}

## Contributing
---
${answers.contributing}

## Tests
---
${answers.tests}

## Questions
---
${answers.questions}

[GitHub](https://github.com/${answers.username})

If you have any questions, please email me at: ${answers.email}

`;
}

module.exports = generateMarkdown;
