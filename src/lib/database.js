import { PrismaClient } from "./prisma/client/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});
const adapter = new PrismaPg(pool);

export default new PrismaClient({ adapter });
