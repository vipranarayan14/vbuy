const { client, q } = require("./db");

const updateItem = async (refId, data) =>
  await client.query(q.Update(q.Ref(q.Collection("items"), refId), { data }));

module.exports = updateItem;
