const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "UNCC";
    const employeeInst = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInst.school).toBe(testSchool);
});

test("checking officeNumber will return office number.", () => {
    const testSchool = "UNCC";
    const employeeInst = new Intern("Guru", 6, "gurudarji@email.com", testSchool);
    expect(employeeInst.getSchool()).toBe(testSchool);
});

test("checking role.", () => {
    const returnValue = "Intern";
    const employeeInst = new Intern("Guru", 6, "gurudarji@email.com", "UNCC");
    expect(employeeInst.getRole()).toBe(returnValue);
});