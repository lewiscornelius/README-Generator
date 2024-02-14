# README-Generator

## User Story

```md
AS a developer
I WANT a README generator
SO THAT I can easily and quickly generate new README's for my projects
```

## Acceptance Criteria

```md
GIVEN a command line interface
WHEN the user is prompted to enter their project name, description, installation instructions
THEN they should be presented with a generated README file with the specified information.
WHEN the user enters the projec title
THEN the title should be added to the README file.
WHEN the user am prompted to provide installation instructions 
THEN any additional instruction provided should be appended to the existing install section of the README
WHEN the user choose a license for my application from a list of options
THEN a badge for that license is added to the top of the README
WHEN the user enters GitHub username
Then this is added as a link to the users profile in the contributors section of the README
WHEN the user enters their email address
THEN an email link is added to the same section
```

