const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = ({ title, description, content, installation, usage, license, contributing, test, github, email }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Project Title</title>
</head>
<body>
  <div class="display-2">${title}</div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <section class="display-8"> Description:
       <p1>${description}</p1> 
        <h1>Table of Contents</h1>
        <p2>${content}</p2>
        <h2>Installation Instructions</h2>
        <p3>${installation}</p3>
        <h3>Usage Information</h3> 
        <p4>${usage}</p4>
        <h4>Contribution Guidelines</h4>
        <p5>${contributing}</p5>
        <h5>Test Instruction</h5>
        <p6>${test}</p6>
        <h6 class="lead">If you have any questions <span class="badge badge-secondary">Contact Me</span></h6>
        <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${email}</li>
        </ul>
        <p7>This is the license the application is covered under: ${license}</p7>
    </section>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the User Story?',
    },
    {
      type: 'input',
      name: 'content',
      message: 'Insert table of content here',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation instruction?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is the license the application is covered under?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
