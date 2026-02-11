import mongoose from 'mongoose';
import environment from './environment.js';
import { logger } from './winston.js';


export async function connectDB() {
    await mongoose.connect(environment.database.url, {
        maxConnecting: environment.database.maxConnections,
        ssl: environment.database.ssl,
    });

    logger.info('✅ Database connected');

    mongoose.connection.on('error', (error) => {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    });
    mongoose.connection.on('disconnected', () => {
        logger.error('❌ Database disconnected');
    });
}
