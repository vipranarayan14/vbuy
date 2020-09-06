const { client, q } = require("./faunadb");

const updateList = async ({ id, items }) =>
  await client.query(
    q.Update(q.Ref(q.Collection("lists"), id), {
      data: { items },
    })
  );

const getQuery = (id) =>
  q.Let(
    { list: q.Get(q.Ref(q.Collection("lists"), id)) },
    {
      items: q.Select(["data", "items"], q.Var("list")),
      name: q.Select(["data", "name"], q.Var("list")),
      id: q.Select(["ref", "id"], q.Var("list")),
    }
  );

const getList = async ({ id }) => await client.query(getQuery(id));

module.exports = { getList, updateList };
