const { queryString } = require("./queryStrings");

describe("Object to query string", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Rafael",
      lastName: "Moura",
    };
    queryString(obj);
    expect(queryString(obj)).toBe("name=Rafael&lastName=Moura");
  });
});
