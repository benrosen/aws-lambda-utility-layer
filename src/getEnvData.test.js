const getEnvData = require("./getEnvData");

describe("The getEnvData function", () => {
  it("should be defined.", () => {
    expect(getEnvData).toBeDefined();
  });

  it("should throw a MissingArgumentError if the environment argument is missing.", () => {
    //
  });

  it("should throw a MissingArgumentError if the keys argument is missing.", () => {
    //
  });

  it("should throw a MissingEnvironmentVariableError if a key is provided for an undefined environment variable.", () => {
    //
  });

  it("should return an array containing a value for each key in the keys argument.", () => {
    //
  });
});
