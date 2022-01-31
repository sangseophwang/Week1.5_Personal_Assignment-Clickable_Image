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

export interface ProductInterface {
  id: number;
  imageUrl: string;
  productList: ProductItems[];
}

export interface TitleInterface {
  title: string;
  tags: string[];
  locker: number;
  comments: number;
  date: string;
}
