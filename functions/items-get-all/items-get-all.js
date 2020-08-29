const database = require("../../database");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "GET") {
      return { statusCode: 500, body: "Only GET method is allowed." };
    }

    const response = await database.getAllItems();

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
