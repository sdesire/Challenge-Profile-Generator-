// using Intern constructor
const { test } = require("@jest/globals");

const Intern = require("../lib/Intern");

// create Intern object
test("crea an Intern object", () => {
  const Intern = new Intern("Sean", 90, "sean.desire@gmail", "UCF");

  expect(intern.school).toEqual(expect.any(String));
});

// get school from getSchool()
test("gets employee school", () => {
  const intern = new Intern("Sean", 90, "sean.desire@gmail", "UCF");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// gets role from getRole()
test("gets role of employee", () => {
  const intern = new Intern("Nicole", 90, "nicole.elisaw@gmail.com", "SFSU");

  expect(intern.getRole()).toEqual("Intern");
});
