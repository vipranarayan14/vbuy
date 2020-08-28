const faunadb = require("faunadb");

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const { query } = faunadb;

module.exports = { client, query };
