const Employee = require('../lib/Employee')

test('Produce an Employee object', () => {

    const employee = new Employee('Mary', 123, 'mary123@gmail.com')

    expect(employee.name).toBe('Mary');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('mary123@gmail.com');
})

test('Return employee name', () => {

    const employee = new Employee('Mary', 123, 'mary123@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('Return employee ID', () => {

    const employee = new Employee('Mary', 123, 'mary123@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})

test('Return employee email', () => {

    const employee = new Employee('Mary', 123, 'mary123@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('Return role', () => {

    const employee = new Employee('Mary', 123, 'mary123@gmail.com');

    expect(employee.getRole()).toBe('Employee');

})