import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseInterceptors,
    UploadedFiles,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('file', 10))
    create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFiles()
        files?: Express.Multer.File[],
    ) {
        return this.productsService.create(createProductDto, files);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }
}
