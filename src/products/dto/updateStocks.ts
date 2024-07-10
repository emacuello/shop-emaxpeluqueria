export class UpdateStocks {
    products: ProductId[];
}

interface ProductId {
    _id: string;
    quantity: number;
}
