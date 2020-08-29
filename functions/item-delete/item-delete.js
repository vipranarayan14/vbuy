const database = require("../../database");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "DELETE") {
      return { statusCode: 500, body: "Only DELETE method is allowed." };
    }

    const response = await database.deleteItem(JSON.parse(event.body));

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
