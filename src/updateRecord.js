/**
 * Update a record in a DynamoDB table and return the result.
 *
 * @module updateRecord
 * @param {*} documentClient The DynamoDB document client.
 * @param {*} params The update parameters
 */
module.exports = function updateRecord(documentClient, params) {
  return documentClient
    .update(params)
    .promise()
    .then((response) => {
      return response;
    });
};
