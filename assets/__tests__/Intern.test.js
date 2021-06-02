const Intern = require("../lib/Intern");
test("Intern Object", () => {
  const intern = new Intern();
  expect(typeof(intern)).toBe("object");
});

test("Setting Name", () => {
    const intern = new Intern("name");
    expect(intern.name).toBe("name");
});

test("Get Role", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
});

test("Get School", () => {
    const intern = new Intern("name", "id", "email", "getSchool");
    expect(intern.getSchool()).toBe("getSchool");
});