import { Interface } from "readline";
import { Props as ProductButtons } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImage } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImage) => JSX.Element;
  Buttons: ({ className }: ProductButtons) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
