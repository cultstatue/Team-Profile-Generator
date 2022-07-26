const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    officeNumber() {
        return `${this.office}`;
    }

    getRole() {
        return `Team Manager`;
    }

}

module.exports = Manager;