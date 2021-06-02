const Engineer = require("../lib/Engineer");
test("Engineer Object", () => {
  const engineer = new Engineer();
  expect(typeof(engineer)).toBe("object");
});

test("Setting Name for Engineer", () => {
    const engineer = new Engineer("name");
    expect(engineer.name).toBe("name");
});

test("Setting Id for Engineer", () => {
    const engineer = new Engineer("name","id");
    expect(engineer.id).toBe("id");
});

test("Setting email for Engineer", () => {
    const engineer = new Engineer("name","id","email");
    expect(engineer.email).toBe("email");
});

test("Setting github for Engineer", () => {
    const engineer = new Engineer("name","id","email","github");
    expect(engineer.github).toBe("github");
});

test("Get Role", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
});

test("Get Github", () => {
    const engineer = new Engineer("name", "id", "email", "getGithub");
    expect(engineer.getGithub()).toBe("getGithub");
});