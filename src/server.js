import initApp from "./app.js";
import environment from "./config/environment.js";
import prismaClient from "./lib/database.js";
import redisClient from "./lib/redis.js";
import { logger } from "./lib/winston.js";

const startServer = async () => {
    try {
        await redisClient.connect();
        await prismaClient.$connect().then(() => logger.info("✅ Database connected"));
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
// دي list اللي كنت طالبها 
//القائمة النهائية المقترحة (12–15 تخصص — كفاية ومش كتير)

// سباك صحي
// كهربائي منزلي
// فني تكييف وتبريد
// نقاش ودهان جدران
// تركيب بلاط وسيراميك وأرضيات
// نجار أثاث ومطابخ
// تركيب وتجميع أثاث IKEA وغيره
// فني ألوميتال (شبابيك وأبواب)
// فني جبس بورد وأسقف معلقة
// فني أجهزة كهربائية منزلية (غسالة، ثلاجة، بوتاجاز)
// تركيب مطابخ وخزائن
// حداد وأعمال معدنية وأبواب حديد
// تركيب دش وخلاطات وحمامات
// فني تنظيف وتعقيم بعد التشطيب
// فني صيانة سخانات وغلايات