const database = require("../../database");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 500, body: "Only POST method is allowed." };
    }

    const response = await database.addItem(JSON.parse(event.body));

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
