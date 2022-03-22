const Intern = require("../lib/Intern");

discribe("Can create school.", () => {
    const testSchool = "UNCC";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

discribe("Testing officeNumber will return office number.", () => {
    const testSchool = "UNCC";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

discribe("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", "UNCC");
    expect(employeeInstance.getRole()).toBe(returnValue);
});