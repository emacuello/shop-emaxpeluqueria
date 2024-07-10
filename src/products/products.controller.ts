import {
    Controller,
    Post,
    Body,
    UseInterceptors,
    UploadedFiles,
    UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, FindOne } from './dto/create-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from './guards/role.guard';
import { UpdateStocks } from './dto/updateStocks';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @UseGuards(RolesGuard)
    @UseInterceptors(FilesInterceptor('file', 10))
    create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFiles()
        files?: Express.Multer.File[],
    ) {
        return this.productsService.create(createProductDto, files);
    }

    @MessagePattern({ cmd: 'findAllProducts' })
    async findAll() {
        return await this.productsService.findAll();
    }

    @MessagePattern({ cmd: 'findOneProduct' })
    async findOne(@Payload() data: FindOne) {
        console.log(data);

        return await this.productsService.findOne(data.id);
    }

    @MessagePattern({ cmd: 'restStock' })
    async updateStocks(@Payload() data: UpdateStocks) {
        await this.productsService.updateStocks(data);
    }
    @MessagePattern({ cmd: 'newStock' })
    async newStock(@Payload() data: UpdateStocks) {
        await this.productsService.newStock(data);
    }
}
