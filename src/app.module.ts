import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URL } from './config/env';
import { FileUploadModule } from './file-upload/file-upload.module';
import * as morgan from 'morgan';
import { JwtConfigModule } from './config/jwt.module';

@Module({
    imports: [
        MongooseModule.forRoot(DATABASE_URL),
        ProductsModule,
        FileUploadModule,
        JwtConfigModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(morgan('dev')).forRoutes('*');
    }
}
