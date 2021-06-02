const Manager = require("../lib/Manager");
test("Manager Object", () => {
  const manager = new Manager();
  expect(typeof(manager)).toBe("object");
});

test("Setting Name", () => {
    const manager = new Manager("name");
    expect(manager.name).toBe("name");
});

test("Get Role", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
});

test("Get Office Number", () => {
    const manager = new Manager("name", "id", "email", "getNumber");
    expect(manager.getNumber()).toBe("getNumber");
});