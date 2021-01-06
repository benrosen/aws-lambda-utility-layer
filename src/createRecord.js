/**
 * Create a record in a DynamoDB table and return the result.
 *
 * @module createRecord
 * @param {*} documentClient The DynamoDB document client.
 * @param {string} tableName The name of the DynamoDB table.
 * @param {*} record The record to be created.
 * @returns {*} The record that was created.
 */
module.exports = function createRecord(documentClient, tableName, record) {
  return documentClient
    .put({
      Item: record,
      TableName: tableName,
    })
    .promise()
    .then(() => record);
};
