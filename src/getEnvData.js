/**
 * Get data from the Lambda environment.
 *
 * @module getEnvData
 * @param {*} environment The Lambda environment.
 * @param {string} key The key of the environment data you want to get.
 * @returns {*} The environment data.
 */
module.exports = function getEnvData(environment, key) {
  const data = environment[key];
  if (data) {
    return data;
  }
  // TODO extract to custom error class
  // TODO document @throws custom error type
  throw new Error(`Function requires environment variable: '${key}'`);
};
