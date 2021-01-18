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
    throw new TypeError("Missing required argument: environment.");
  }

  if (!keys) {
    throw new TypeError("Missing required argument: keys.");
  }

  const getData = (key) => {
    const data = environment[key];
    if (data) {
      return data;
    }
    throw new Error(`Missing required environment variable: '${key}'`);
  };

  if (keys.length === 1) {
    return getData(keys[0]);
  }

  return keys.map((key) => getData(key));
};
