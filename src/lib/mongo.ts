import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB ?? "mydb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;
  if (!uri) throw new Error("MONGODB_URI not set");

  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
    });
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(dbName);
  return cachedDb;
}
