// This is a good README template
function generateMarkdown(data) {
  return `
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
You need to run: ${data.Installation} to run this application.
# Usage
​This application is used for ${data.Usage}
# License
The following project is under ${data.License} license.
# Contributing
​Contributors: ${data.Contributor}
# Tests
To run any test please run: ${data.Test}
# Questions
For any questions please contact, ${data.UserName}  ${data.Email}.
`;
}

module.exports = generateMarkdown;
