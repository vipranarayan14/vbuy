import { client, query } from "./db";

const getAll = client
  .query(query.Paginate(query.Match(query.Ref("indexes/items"))))
  .then(async (response) => {
    const itemsRefs = response.data;

    const getAllItemsDataQuery = itemsRefs.map((ref) => query.Get(ref));

    const data = await client.query(getAllItemsDataQuery);

    return data;
  })
  .catch((error) => console.warn("error", error.message));

export default getAll;
