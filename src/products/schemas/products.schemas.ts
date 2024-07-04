import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop({ length: 2000 })
    description: string;

    @Prop({
        default: [
            'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/xacizdmxtpf7knsrzfth',
        ],
        type: [String],
    })
    image: string[];

    @Prop({ default: 100 })
    stock: number;
    @Prop({ default: 0 })
    offerprice: number;
    @Prop({ default: false })
    offer: boolean;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
