import initApp from "./app.js";
import { connectDB } from "./config/database.js";
import environment from "./config/environment.js";
import { redisClient, connectRedis } from "./config/redis.js";
import { logger } from "./config/winston.js";

const startServer = async () => {
    try {
        await connectDB();
        await connectRedis();
        const app = await initApp();
        app.listen(environment.backend.port, () => logger.info(`✅ Listening on port ${environment.backend.port}`));
    } catch (error) {
        console.error('❌ Error starting server, error: ', error);
    }
};

// Handle Ctrl+C gracefully
process.on('SIGINT', async () => {
    logger.info('\n👋 Shutting down...');
    process.exit(0);
});

startServer();
