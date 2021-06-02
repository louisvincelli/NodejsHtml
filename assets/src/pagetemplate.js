const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")

const generateHTML = team => {
    const generateManager = manager => {
        return `
        <h1>${manager.getName()}</h1>
        ${manager.getRole()}
        ${manager.getId()}
        ${manager.getEmail()}
        ${manager.getNumber()}
        `
    }
    const generateEngineer = Engineer => {
        return `
        ${Engineer.getName()}
        ${Engineer.getRole()}
        ${Engineer.getId()}
        ${Engineer.getEmail()}
        ${Engineer.getGithub()}
        `
    }
    const generateIntern = Intern => {
        return `
        ${Intern.getName()}
        ${Intern.getRole()}
        ${Intern.getId()}
        ${Intern.getEmail()}
        ${Intern.getSchool()}
        `
    }
    const HTML = [];
    HTML.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    HTML.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    HTML.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );
    return HTML.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
${generateHTML(team)}
</body>
    `
}