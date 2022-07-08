import { queryString, parse } from "./queryStrings";

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

describe("Query string to object", () => {
  it("should convert query string to object", () => {
    const qs = "name=Rafael&lastName=Moura";

    expect(parse(qs)).toEqual({
      name: "Rafael",
      lastName: "Moura",
    });
  });

  it("should convert query string to object", () => {
    const qs = "name=Rafael&lastName=Costa,Moura";

    expect(parse(qs)).toEqual({
      name: "Rafael",
      lastName: ["Costa", "Moura"],
    });
  });
});
