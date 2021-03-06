import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                    // Prohibir datos que no esten en los DTO
      forbidNonWhitelisted: true,         // Lanzar error si existen datos prohibidos
      disableErrorMessages: true,         // Desabilitar mensajes de error (producción)
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Platzi API')
    .setDescription('Documentación API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
