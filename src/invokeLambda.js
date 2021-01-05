/**
 * Invoke a Lambda function and return the result.
 *
 * @module invokeLambda
 * @param {*} client The Lambda client to use.
 * @param {string} functionName The name of the Lambda function to invoke.
 * @param {*} payload The Lambda function payload.
 * @returns {*} The payload returned from the Lambda function.
 */
module.exports = function invokeLambda(client, functionName, payload) {
  return client
    .invoke({
      FunctionName: functionName,
      Payload: JSON.stringify(payload),
    })
    .promise()
    .then((response) => JSON.parse(response.Payload));
};
