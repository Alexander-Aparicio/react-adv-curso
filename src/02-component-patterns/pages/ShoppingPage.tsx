import ProductCard, { ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffe-mug.jpg",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
