import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { connectToDatabase } from "../lib/mongo";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const db = await connectToDatabase();
  const items = await db.collection("items").find({}).toArray();
  return { statusCode: 200, body: JSON.stringify(items) };
};
