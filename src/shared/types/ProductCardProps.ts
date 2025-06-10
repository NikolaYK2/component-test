type Currency = 'RUB' | 'USD' | 'EUR'
export type ProductCardProps = {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}
