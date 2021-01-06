const { expect } = require("@jest/globals");
const { createRecord, getEnvData, invokeLambda } = require("./index.js");

describe("The aws-lambda-utility-layer package", () => {
  describe("createRecord function", () => {
    it("should be defined.", () => {
      expect(createRecord).toBeDefined();
    });
  });

  describe("getEnvData function", () => {
    it("should be defined.", () => {
      expect(getEnvData).toBeDefined();
    });
  });

  describe("invokeLambda function", () => {
    it("should be defined.", () => {
      expect(invokeLambda).toBeDefined();
    });
  });
});
