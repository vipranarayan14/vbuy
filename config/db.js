import faunadb from "faunadb";

export const client = new faunadb.Client({
  secret: process.env.SHOPPING_LIST_APP_FAUNADB_KEY,
});

export const { query } = faunadb;
