import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    // ======== CORS SECURITY ========
    const corsOptions = {
      origin : [
        'http://localhost:4200',
        "http://madeingalsen.dev"
      ],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    }
    // ===============================
  /** 
   * ==================================================
   * Nest  App Creation Using NestFactory Core.
   * @see -> https://docs.nestjs.com/first-steps
   */
   const app = await NestFactory.create(AppModule);

   app.enableCors(corsOptions);
 
   app.setGlobalPrefix('api'); // Will make all routes start with '/api'
 
   // ==================================================
 
   /**
    * ============================================================
    * ⚙ Swagger Module Configuration for OpenAPI Documentation ⚙
    * ===========================================================
    */
   /* Swagger Customisation refer to : https://docs.nestjs.com/openapi/introduction */ 
    const customOptions: SwaggerCustomOptions = {
     swaggerOptions: {
       persistAuthorization: true,
     },
     customSiteTitle: '📡 MADE-IN-GALSEN OPEN API ⚙', // Documentation Website Title
     customfavIcon: 'https://www.madeinsenegal.dev/favicon.ico', // Documentation Website Favicon
   };
 
   const config = new DocumentBuilder()
     .setTitle('MADE-IN-GALSEN API GATEWAY')
     .setDescription('This is the API Description conforms to the OpenAPI Specification.')
     .setVersion('1.0')
    //  .addTag('DEMO', 'Built by Orbit Turner.')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document, customOptions);
   // ==================================================
 
 
   /** Launching The Server at Port : 3000 */
   await app.listen(3000);
   // ==================================================
}
bootstrap();