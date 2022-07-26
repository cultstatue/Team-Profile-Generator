const Intern = require('../lib/Intern')

test('creates an intern object', () => {

    const intern = new Intern('Mary', 123, 'mary123@gmail.com', 'MICA');

    expect(intern.name).toBe('Mary');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('mary123@gmail.com');
    expect(intern.school).toBe('MICA');

})

test('returns interns school', () => {

    const intern = new Intern('Mary', 123, 'mary123@gmail.com', 'MICA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

})

test('Return role', () => {

    const intern = new Intern('Mary', 123, 'mary123@gmail.com', 'MICA');

    expect(intern.getRole()).toBe('Intern');

})