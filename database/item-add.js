const { client, q } = require("./db");

const addItem = async (item) =>
  await client.query(
    q.Create(q.Collection("items"), {
      data: item,
    })
  );

module.exports = addItem;
