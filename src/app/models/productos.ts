export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  created: Date;
  vendido: number;
  image: string; //?opcional, | null
}
