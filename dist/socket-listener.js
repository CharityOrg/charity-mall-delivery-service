"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                'amqps://hzrndbxi:awtUfTig_X7rUPlfsJzJBAGO8mOQA7cC@cow.rmq2.cloudamqp.com/hzrndbxi',
            ],
            queue: 'delivery_queue',
            queueOptions: {
                durable: false,
            },
        },
    });
    app.listen().then(() => {
        console.log('Service is listening');
    });
}
bootstrap();
//# sourceMappingURL=socket-listener.js.map