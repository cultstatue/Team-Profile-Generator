const Manager = require('../lib/Manager');

test('creates a manager object', () => {

    const manager = new Manager('Mary', 123, 'mary123@gmail.com', '6D');

    expect(manager.name).toBe('Mary');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('mary123@gmail.com');
    expect(manager.office).toBe('6D');

})

test('returns manager office number', () => {

    const manager = new Manager('Mary', 123, 'mary123@gmail.com', '6D');

    expect(manager.officeNumber()).toEqual(expect.stringContaining(manager.office.toString()));

})

test('returns role', () => {

    const manager = new Manager('Mary', 123, 'mary123@gmail.com', '6D');

    expect(manager.getRole()).toBe('Team Manager');

})