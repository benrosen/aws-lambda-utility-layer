const { ArgumentNullError, NotFoundError } = require("common-errors");

/**
 * Get data from the Lambda environment.
 *
 * @module getEnvData
 * @param {*} environment The Lambda environment.
 * @param {string[]} keys The key of the environment data you want to get.
 * @returns {*[]} A list of environment data values.
 */
module.exports = function getEnvData(environment, keys) {
  if (!environment) {
    throw new ArgumentNullError("environment");
  }

  if (!keys) {
    throw new ArgumentNullError("keys");
  }

  const getData = (key) => {
    if (!(key in environment)) {
      throw new NotFoundError(key);
    }

    return environment[key];
  };

  if (keys.length === 1) {
    return getData(keys[0]);
  }

  return keys.map((key) => getData(key));
};
