import ProductCard from "../components";
import { Products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
            />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
            />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
