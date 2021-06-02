const Employee = require("../lib/Employee");
test("Employee Object", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Setting Name", () => {
    const employee = new Employee("name");
    expect(employee.name).toBe("name");
});

test("Setting Id", () => {
    const employee = new Employee("name","id");
    expect(employee.id).toBe("id");
});

test("Setting email", () => {
    const employee = new Employee("name","id","email");
    expect(employee.email).toBe("email");
});

test("Get Name", () => {
    const employee = new Employee("getName");
    expect(employee.getName()).toBe("getName");
});

test("Get Id", () => {
    const employee = new Employee("getName","getId");
    expect(employee.getId()).toBe("getId");
});

test("Get Email", () => {
    const employee = new Employee("getName","getId","getEmail");
    expect(employee.getEmail()).toBe("getEmail");
});

test("Get Role", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
});