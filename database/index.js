const { client, q } = require("./faunadb");

const addItem = async (data) =>
  await client.query(q.Create(q.Collection("items"), { data }));

const deleteItem = async (refId) =>
  await client.query(q.Delete(q.Ref(q.Collection("items"), refId)));

const updateItem = async (refId, data) =>
  await client.query(q.Update(q.Ref(q.Collection("items"), refId), { data }));

const getAllItems = async () =>
  await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("all_items"))),
      q.Lambda("attr", q.Get(q.Var("attr")))
    )
  );

module.exports = { getAllItems, addItem, deleteItem, updateItem };
