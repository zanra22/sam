import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProductList from "./product/components/ProductList";
import API_BASE_URL from "@/utils/API";

const fetchProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/api/products/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
