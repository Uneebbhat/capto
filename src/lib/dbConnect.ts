import mongoose from "mongoose";

import { MONGODB_URI } from "@/config/constants";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database already connectd");
    return;
  }

  try {
    const db = await mongoose.connect((MONGODB_URI as string) || "");
    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Database connection faild: ${error}`);
    process.exit(1);
  }
}

export default dbConnect;
