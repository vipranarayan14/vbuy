const { client, query } = require("./db");

const deleteItem = async (item) => {
  await client.query(
    query.Delete(query.Ref(query.Collection("items"), item.ref["@ref"].id))
  );
};

module.exports = deleteItem;
