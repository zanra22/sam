import React from "react";
import ProductCard from "./ProductCard";
import { Container, Typography, Box } from "@mui/material";
const ProductList = ({ products }) => {
  return (
    <Container>
      <Typography variant="h4" className="text-center my-8">
        Our Products
      </Typography>
      <Box component={"section"} className="flex flex-col items-center">
        <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default ProductList;
