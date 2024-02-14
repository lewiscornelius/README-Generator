
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}


function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}


function renderLicenseSection(license) {
    if  (license !== 'None') {
        return `## License This  project is licensed under the ${license} license.`;
    }
    return '';
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  ${renderLicenseLink(data.license)}
  
  ## Installation

  To install necessary dependencies use the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run test, follow these commands:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  If you have any questions about this project, please reach out to me at ${data.email
}. Or you can find more at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
