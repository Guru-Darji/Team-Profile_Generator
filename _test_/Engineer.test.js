const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const checkGithub = "Guru-Darji";
    const employeeInst = new Engineer("James", 6, "gurudarji@email.com", checkGithub);
    expect(employeeInst.github).toBe(checkGithub);
});

test("checking getGithub will return github.", () => {
    const checkGithub = "Guru-Darji";
    const employeeInst = new Engineer("James", 6, "gurudarji@email.com", checkGithub);
    expect(employeeInst.getGithub()).toBe(checkGithub);
});

test("checking role.", () => {
    const returnValue = "Engineer";
    const employeeInst = new Engineer("James", 6, "gurudarji@email.com", "Guru-Darji");
    expect(employeeInst.getRole()).toBe(returnValue);
});