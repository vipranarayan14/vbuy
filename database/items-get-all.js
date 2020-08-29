const { client, query } = require("./db");

const getAllItems = async () =>
  await client.query(
    query.Map(
      query.Paginate(query.Match(query.Index("all_items"))),
      query.Lambda("attr", query.Get(query.Var("attr")))
    )
  );

module.exports = getAllItems;