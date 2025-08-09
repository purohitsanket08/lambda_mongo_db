import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { connectToDatabase } from "../lib/mongo";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const db = await connectToDatabase();
  const body = event.body ? JSON.parse(event.body) : {};
  const res = await db.collection("items").insertOne(body);
  return {
    statusCode: 201,
    body: JSON.stringify({ insertedId: res.insertedId })
  };
};