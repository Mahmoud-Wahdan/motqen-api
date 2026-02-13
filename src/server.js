import initApp from "./app.js";
import environment from "./config/environment.js";
import "./lib/database.js";
import redisClient from "./lib/redis.js";
import { logger } from "./lib/winston.js";

const startServer = async () => {
    try {
        await redisClient.connect();
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
