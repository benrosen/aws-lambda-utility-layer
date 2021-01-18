const { ArgumentNullError, NotFoundError } = require("common-errors");
const getEnvData = require("./getEnvData");

describe("The getEnvData function", () => {
  it("should be defined.", () => {
    expect(getEnvData).toBeDefined();
  });

  it("should throw an ArgumentNullError if the environment argument is undefined.", () => {
    const environment = undefined;
    const keys = ["a", "b"];
    expect(() => getEnvData(environment, keys)).toThrow(ArgumentNullError);
  });

  it("should throw an ArgumentNullError if the keys argument is undefined.", () => {
    const environment = { a: 1, b: "2" };
    const keys = undefined;
    expect(() => getEnvData(environment, keys)).toThrow(ArgumentNullError);
  });

  it("should throw a NotFoundError if a key is provided for an undefined environment variable.", () => {
    const environment = { a: 1, b: "2" };
    const keys = ["c"];
    expect(() => getEnvData(environment, keys)).toThrow(NotFoundError);
  });

  it("should return a value if a valid key is provided.", () => {
    const data = 1;
    const environment = { key: data };
    const keys = ["key"];
    expect(getEnvData(environment, keys)).toStrictEqual(data);
  });

  it("should return an array containing a value for each key in the keys argument.", () => {
    const environment = { a: false, b: 1, c: 2.0, d: "three" };
    const keys = ["a", "b", "c", "d"];
    expect(getEnvData(environment, keys)).toStrictEqual([
      false,
      1,
      2.0,
      "three",
    ]);
  });
});
