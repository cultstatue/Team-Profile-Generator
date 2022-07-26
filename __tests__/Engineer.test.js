const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {

    const engineer = new Engineer('Mary', 123, 'mary123@gmail.com', 'mary123');

    expect(engineer.name).toBe('Mary');
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe('mary123@gmail.com');
    expect(engineer.github).toBe('mary123');

})

test('returns engineers github', () => {

    const engineer = new Engineer('Mary', 123, 'mary123@gmail.com', 'mary123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

})

test('Return role', () => {

    const engineer = new Engineer('Mary', 123, 'mary123@gmail.com', 'mary123');

    expect(engineer.getRole()).toBe('Engineer');

})