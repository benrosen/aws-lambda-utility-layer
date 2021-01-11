/**
 * Update a record in a DynamoDB table and return the result.
 *
 * @module updateRecord
 * @param {*} documentClient The DynamoDB document client.
 * @param {*} params The update parameters
 * @returns {*} The updated record.
 */
module.exports = function updateRecord(documentClient, params) {
  return documentClient
    .update(params)
    .promise()
    .then((response) => response);
};
