import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { connectToDatabase } from "../lib/mongo";
import { ObjectId } from "mongodb";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const db = await connectToDatabase();
  const body = event.body ? JSON.parse(event.body) : {};

  // Ensure _id is provided for delete
  if (!body._id || typeof body._id !== "string") {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "_id (string) is required for delete" })
    };
  }

  const filter = { _id: body._id};
  const res = await db.collection("items").deleteOne(filter);

  return {
    statusCode: 200,
    body: JSON.stringify({ deletedCount: res.deletedCount })
  };
}