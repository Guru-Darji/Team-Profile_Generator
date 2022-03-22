const Manager = require("../lib/Manager");

discribe("Can create an office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Guru", 6, "gurudarji@email.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

discribe("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Guru", 6, "gurudarji@email.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

discribe("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Guru", 6, "gurudarji@email.com", 3);
    expect(employeeInstance.getRole()).toBe(returnValue);
});
