const db = require("../db");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "GET") {
      return { statusCode: 500, body: "Only GET method is allowed." };
    }

    const response = await db.getAllItems();

    console.log(response);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
