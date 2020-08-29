const { client, query } = require("./db");

const addItem = async (item) =>
  await client.query(
    query.Create(query.Collection("items"), {
      data: item,
    })
  );

module.exports = addItem;
