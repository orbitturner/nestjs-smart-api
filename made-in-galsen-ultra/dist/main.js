"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const corsOptions = {
        origin: [
            'http://localhost:4200',
            "http://madeingalsen.dev"
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(corsOptions);
    app.setGlobalPrefix('api');
    const customOptions = {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: '📡 MADE-IN-GALSEN OPEN API ⚙',
        customfavIcon: 'https://www.madeinsenegal.dev/favicon.ico',
    };
    const config = new swagger_1.DocumentBuilder()
        .setTitle('MADE-IN-GALSEN API GATEWAY')
        .setDescription('This is the API Description conforms to the OpenAPI Specification.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, customOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map