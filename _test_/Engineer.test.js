const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Guru-Darji";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Guru-Darji";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", "Guru-Darji");
    expect(employeeInstance.getRole()).toBe(returnValue);
});