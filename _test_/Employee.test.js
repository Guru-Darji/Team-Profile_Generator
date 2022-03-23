const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInst = new Employee();
    expect(typeof(employeeInst)).toBe("object");
})

test("Testing name.", () => {
    const name = "Guru";
    const employeeInst = new Employee(name);
    expect(employeeInst.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 6;
    const employeeInst = new Employee("Guru", id);
    expect(employeeInst.id).toBe(id);
})

test("Testing email.", () => {
    const email = "gurudarji@email.com";
    const employeeInst = new Employee("Guru", 6, email);
    expect(employeeInst.email).toBe(email);
})



test("Pass name through the getName method.", () => {
    const testName = "Guru";
    const employeeInst = new Employee(testName);
    expect(employeeInst.getName()).toBe(testName);
})

test("test the ID through the getID method.", () => {
    const testID = 6;
    const employeeInst = new Employee("Guru", testID);
    expect(employeeInst.getId()).toBe(testID);
})

test("test the ID through the getEmail method.", () => {
    const testEmail = "gurudarji@email.com";
    const employeeInst = new Employee("Guru", 6, testEmail);
    expect(employeeInst.getEmail()).toBe(testEmail);
})

test("test the role", () => {
    const returnValue = "Employee";
    const employeeInst = new Employee("Guru", 6, "gurudarji@email.com");
    expect(employeeInst.getRole()).toBe(returnValue);
})