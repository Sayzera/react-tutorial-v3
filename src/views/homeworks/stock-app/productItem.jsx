import React from "react";

function ProductItem({ product }) {
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        paddingBottom: "10px",
      }}
    >
      <p>Product ID: {product.id}</p>
      <p>Product Name {product.name}</p>

      <p>{product.instock ? "Stokta var" : "Stokta yok"}</p>
    </div>
  );
}

export { ProductItem };
