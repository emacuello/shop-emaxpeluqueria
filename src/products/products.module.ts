import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/products.schemas';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CloudinaryConfig } from '../config/cloudinary.config';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
        ]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService, FileUploadService, CloudinaryConfig],
})
export class ProductsModule {}
