import { client, query } from "./db";

const create = (text: string) =>
  client
    .query(
      query.Create(query.Collection("items"), {
        data: {
          text,
        },
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default create;
