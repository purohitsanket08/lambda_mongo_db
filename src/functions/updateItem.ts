import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { connectToDatabase } from "../lib/mongo";
import { ObjectId } from "mongodb";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const db = await connectToDatabase();
  const body = event.body ? JSON.parse(event.body) : {};

  // Ensure _id is provided for update
  if (!body._id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "_id is required for update" })
    };
  }

  const filter = { _id: body._id};
  const update = { $set: { ...body } };
  delete update.$set._id;

  const res = await db.collection("items").updateOne(filter, update);

  return {
    statusCode: 200,
    body: JSON.stringify({ matchedCount: res.matchedCount, modifiedCount: res.modifiedCount })
  };
};