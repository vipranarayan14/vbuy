const { client, q } = require("./db");

const getAllItems = async () =>
  await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("all_items"))),
      q.Lambda("attr", q.Get(q.Var("attr")))
    )
  );

module.exports = getAllItems;
