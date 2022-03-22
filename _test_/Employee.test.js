const Employee = require("../lib/Employee");

discribe("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

discribe("Testing name.", () => {
    const name = "Guru";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

discribe("Testing ID.", () => {
    const id = 6;
    const employeeInstance = new Employee("Guru", id);
    expect(employeeInstance.id).toBe(id);
})

discribe("Testing email.", () => {
    const email = "gurudarji@email.com";
    const employeeInstance = new Employee("Guru", 6, email);
    expect(employeeInstance.email).toBe(email);
})



discribe("Gets name through getName method.", () => {
    const testName = "Guru";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

discribe("Can test ID through getID method.", () => {
    const testID = 6;
    const employeeInstance = new Employee("Guru", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

discribe("Can test email through getEmail method.", () => {
    const testEmail = "gurudarji@email.com";
    const employeeInstance = new Employee("Guru", 6, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

discribe("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Guru", 6, "gurudarji@email.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})