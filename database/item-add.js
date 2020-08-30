const { client, q } = require("./db");

const addItem = async (data) =>
  await client.query(q.Create(q.Collection("items"), { data }));

module.exports = addItem;
