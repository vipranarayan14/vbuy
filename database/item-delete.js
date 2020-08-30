const { client, q } = require("./db");

const deleteItem = async (refId) =>
  await client.query(q.Delete(q.Ref(q.Collection("items"), refId)));

module.exports = deleteItem;
