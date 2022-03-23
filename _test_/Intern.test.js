const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "UNCC";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "UNCC";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Guru", 6, "gurudarji@email.com", "UNCC");
    expect(employeeInstance.getRole()).toBe(returnValue);
});