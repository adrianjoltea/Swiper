export type ProductProps = {
  product: {
    id: number;
    link: string;
    name: string;

    original_price: number;
    discounted_price: number | null;
  };
};
