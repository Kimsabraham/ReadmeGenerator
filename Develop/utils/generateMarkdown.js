// This is a good README template
function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
You need to run: ${data.installation} to run this application.
# Usage
​This application is used for ${data.usage}
# License
The following project is under ${data.license} license.
# Contributing
​Contributors: ${data.contributor}
# Tests
To run any test please run: ${data.test}
# Questions
For any questions please contact, ${data.userName}  ${data.email}.
`;
}

module.exports = generateMarkdown;
