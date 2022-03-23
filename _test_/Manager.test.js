const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNum = 3;
    const employeeInst = new Manager("Guru", 6, "gurudarji@email.com", testOfficeNum);
    expect(employeeInst.officeNumber).toBe(testOfficeNum);
});

test("checks officeNumber will return office number.", () => {
    const testOfficeNum = 3;
    const employeeInst = new Manager("Guru", 6, "gurudarji@email.com", testOfficeNum);
    expect(employeeInst.getOfficeNumber()).toBe(testOfficeNum);
});

test("checksrole.", () => {
    const returnValue = "Manager";
    const employeeInst = new Manager("Guru", 6, "gurudarji@email.com", 3);
    expect(employeeInst.getRole()).toBe(returnValue);
});
