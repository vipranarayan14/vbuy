const { client, q } = require("./db");

const deleteItem = async (item) =>
  await client.query(
    q.Delete(q.Ref(q.Collection("items"), item.ref["@ref"].id))
  );

module.exports = deleteItem;
