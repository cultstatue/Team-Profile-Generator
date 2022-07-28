// grabbing neccessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./src/page-template');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// employee constructor onject where program is created and data is stored
function employeeData() {

    this.manager;
    this.interns = [];
    this.engineers = [];

}

// function to write the HTML file
employeeData.prototype.writeFile = function() {
    
    // sends the data stored in the employeeData object to the generateFile function
    const pageContent = generateFile(this);

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageContent, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true,
          });
        });
    })
    .then(
        console.log("HTML generated. Check the dist folder!")
    )

}
// function to allow users to c hoose between entering employee info or generating the HTML
employeeData.prototype.chooseNext = function() {

    inquirer
    .prompt({

        type: 'list',
        name: 'more',
        message: 'Would you like to enter another employee or end the application?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finalize team']

    })
     .then(choice => {
        if (choice.more === 'Finalize team') {
            this.writeFile();
        } else if (choice.more === 'Add an Intern') {
            this.addIntern();
        } else if (choice.more === 'Add an Engineer') {
            this.addEngineer();
        }     
    })
}

// function to enter engineer data
employeeData.prototype.addEngineer = function() {

    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your engineers name.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your engineers email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your engineers ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github username?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your engineers github.');
                    return false;
                }
            }
        }
    ])
    // creates a new Engineer object with provided data and pushes it into employeeDatas engineers array
    .then((engineerData) => {   

        this.engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));

        this.chooseNext();
    })
}

employeeData.prototype.addIntern = function() {

    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your interns name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your interns name.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your interns email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your interns ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your interns school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your interns school.');
                    return false;
                }
            }
        }
    ])
    // creates a new Intern object with provided data and pushes it into employeeDatas interns array
    .then((internData) => {   

        this.interns.push(new Intern(internData.name, internData.id, internData.email, internData.school));

        this.chooseNext();
    })
}
// starts the application by allowing user to enter information on their team manager
employeeData.prototype.initializeApp = function() {                 

    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your team managers name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your team managers email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your team managers email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your team managers employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your team managers ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your team managers office number?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your team managers office number.');
                return false;
            }
        }
    }
    ])
    // create a new Manager object using provided information and assign it to be employeeData's manager attribute
    .then((managerData) => {   

        this.manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office)

        this.chooseNext();
    })

}

// starts the application
new employeeData().initializeApp();