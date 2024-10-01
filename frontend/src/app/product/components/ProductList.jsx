import React from "react";
import ProductCard from "./ProductCard";
import { Container, Typography } from "@mui/material";
const ProductList = ({ products }) => {
  return (
    <Container>
    <Typography variant="h4" className="text-center my-8">
      Our Products
    </Typography>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Container>
  );
};

export default ProductList;
