export interface ProductItems {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

export interface Product {
  id: number;
  imageUrl: string;
  productList: ProductItems[];
}
