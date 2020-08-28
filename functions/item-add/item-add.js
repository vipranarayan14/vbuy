const db = require("../db");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 500, body: "Only POST method is allowed." };
    }

    const response = await db.addItem(JSON.parse(event.body));

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
