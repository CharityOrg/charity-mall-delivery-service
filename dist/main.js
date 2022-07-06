"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const apiDescription = `Cho - Delivery API`;
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Cho - Delivery API')
        .setDescription(apiDescription)
        .setVersion('1.0')
        .build();
    const doc = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api-docs', app, doc);
    await app.listen(process.env.PORT || 3042);
    console.log("server started");
}
bootstrap();
//# sourceMappingURL=main.js.map