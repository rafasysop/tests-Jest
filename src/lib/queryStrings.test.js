const { queryString } = require("./queryStrings");

describe("Object to query string", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Rafael",
      lastName: "Moura",
    };

    expect(queryString(obj)).toBe("name=Rafael&lastName=Moura");
  });

  it("should throw error when invalid object", () => {
    const obj = {
      name: "Rafael",
      lastName: ["Costa", "Moura"],
    };

    expect(queryString(obj)).toBe("name=Rafael&lastName=Costa,Moura");
  });

  it("should throw error when invalid object", () => {
    const obj = {
      name: "Rafael",
      lastName: {
        midlle: "Costa",
        last: "Moura",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
