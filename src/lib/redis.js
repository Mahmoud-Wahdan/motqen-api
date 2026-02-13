import redis from "redis";
import environment from "../config/environment.js";
import { logger } from "./winston.js";

const redisClient = redis.createClient(environment.redis.url);

redisClient.on("error", (err) => logger.error("❌ Redis Client Error", err));
redisClient.on("connect", () => logger.info("✅ Redis Client Connected"));
redisClient.on('disconnected', () => logger.error('❌ Redis disconnected'));


export default redisClient;

