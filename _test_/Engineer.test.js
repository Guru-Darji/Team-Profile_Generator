const Engineer = require("../lib/Engineer");

discribe("Can create a github.", () => {
    const testGithub = "Guru-Darji";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

discribe("Testing getGithub will return github.", () => {
    const testGithub = "Guru-Darji";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

discribe("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("James", 6, "gurudarji@email.com", "Guru-Darji");
    expect(employeeInstance.getRole()).toBe(returnValue);
});