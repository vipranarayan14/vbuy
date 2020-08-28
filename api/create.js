import { client, q as query } from "../config/db";

const create = (text) =>
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
