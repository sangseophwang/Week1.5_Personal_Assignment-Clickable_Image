export interface productList {
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
  productList: productList[];
}

export interface TitleInterface {
  title: string;
  tags: string[];
  locker: number;
  comments: number;
  date: string;
}

export interface ImageListProps {
  productList: productList[];
  onSelectImage: (id: number | null) => void;
  selectedImage: number | null;
}
