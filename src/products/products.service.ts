import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/products.schemas';
import { Model } from 'mongoose';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
        private readonly uploadService: FileUploadService,
    ) {}
    async create(
        createProductDto: CreateProductDto,
        files: Express.Multer.File[],
    ) {
        const createdProduct = new this.productModel(createProductDto);
        if (!createdProduct)
            throw new BadRequestException('Product not created');
        const image_url = await this.uploadProductImage(files);
        createdProduct.image = image_url;
        return await createdProduct.save();
    }

    async findAll() {
        const products = await this.productModel.find();
        if (!products) throw new BadRequestException('Products not found');
        return products;
    }

    async findOne(id: string) {
        const product = await this.productModel.findById(id);
        if (!product) throw new BadRequestException('Product not found');
        return product;
    }

    async uploadProductImage(files: Express.Multer.File[]) {
        const image_url: string[] = [];

        for (const file of files) {
            const uploadedImage = await this.uploadService.uploadStream(file);
            image_url.push(uploadedImage.secure_url);
        }
        return image_url;
    }
}
