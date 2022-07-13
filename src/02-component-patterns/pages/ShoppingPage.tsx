import ProductCard, {
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
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
        <ProductCard product={product} className="bg-dark">
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={product.title} className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
          />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70d1f8",
          }}
        >
          <ProductImage
            img={product.img}
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
          />
          <ProductTitle title={product.title} style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
