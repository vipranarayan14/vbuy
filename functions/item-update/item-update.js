const database = require("../../database");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "PATCH") {
      return { statusCode: 500, body: "Only PATCH method is allowed." };
    }

    const { refId, data } = JSON.parse(event.body);

    const response = await database.updateItem(refId, data);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
