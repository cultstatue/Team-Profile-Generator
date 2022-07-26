const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
// const { writeFile, copyFile } = require('./utils/generate-site.js');


const promptManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team manager name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your team manager name.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your team manager email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your team manager email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team manager employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your team manager ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your team manager office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your team manager office number.');
                    return false;
                }
            }
        },
    ])
}

const promptMore = () => {

    inquirer
    .prompt
    ({
        type: 'list',
        name: 'more',
        message: 'Would you like to enter another employee or end the application?',
        choices: ['Add an Engineer', 'Add an Intern', 'Quit and generate page']
    })
    .then(choice => {
        if (choice.more === 'Quit and generate page') {
            console.log(choice);
        } else if (choice.more === 'Add an Intern') {
            console.log('intern');
        } else if (choice.more === 'Add an Engineer') {
            console.log('engineer');
        } 
    })
}

promptManager()
.then(promptMore)





// .then(managerData => {
//     if (managerData.list === 'Quit and generate page') {
//         console.log("quit");
//     } else if (managerData.list === 'Add an Intern') {
//         console.log("add an intern");
//     } else if (managerData.list === 'Add an Engineer') {
//         console.log("Add an Engineer");
//     }

// }) 





// .then(({ name, email, id, office }) => {        
//     const manager = new Manager(name, email, id, office);
// })

// if (!employeeData.employees) {

//     employeeData.employees = []
// }