// app/products/[id]/page.js (Server Component)
import React from "react";
import ProductDetail from "../components/ProductDetail"; // Import the Client Component
import API_BASE_URL from "@/utils/API";

async function fetchProduct(id) {
  const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
//   console.log(res);
  return res.json();
}

export default async function Page({ params: { id } }) {
  const product = await fetchProduct(id); // Fetch product data
  console.log(product);
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Pass product data to the Client Component */}
        <ProductDetail product={product} />
      </div>
    </section>
  );
}
