import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HOST_REDIS, PASSWORD_REDIS, PORT, PORT_REDIS } from './config/env';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const microservices = app.connectMicroservice({
        transport: Transport.REDIS,
        options: {
            host: HOST_REDIS,
            port: Number(PORT_REDIS),
            password: PASSWORD_REDIS,
            tls: {
                rejectUnauthorized: false,
            },
        },
    });

    await app.startAllMicroservices();
    app.enableCors();
    await app.listen(PORT);
}
bootstrap();
