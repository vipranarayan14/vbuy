const { client, query } = require("./db");

const add = async (item) =>
  await client.query(
    query.Create(query.Collection("items"), {
      data: item,
    })
  );

module.exports = add;
