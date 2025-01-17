// app/products/[id]/ProductDetailClient.js (Client Component)
"use client"; // Specify that this is a Client Component

import React, { useState } from "react";
import {
  Breadcrumbs,
  Typography,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import Rating from "./Rating";
import Magnifier from "./Magnifier";

export default function ProductDetail({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [productImage, setProductImage] = useState(
    product.images.length > 0 ? product.images[0].image.full_size : ""
  );
  // const productImage =
  //   product.images.length > 0 ? product.images[0].image.full_size : "";
  const totalReviews = product.review_list ? product.review_list.length : 0;
  const starCounts = [1, 2, 3, 4, 5].map((star) => {
    const count = product.review_list
      ? product.review_list.filter(
          (review) => Math.floor(review.rating) === star
        ).length
      : 0; // Default to 0 if no reviews exist for that star rating.

    return count;
  });
  return (
    <>
      {/* Breadcrumb */}
      <nav>
        <Breadcrumbs
          separator="/"
          aria-label="breadcrumb"
          style={{ color: "var(--text)" }}
        >
          <Link href="/" style={{ color: "var(--text)" }}>
            Home
          </Link>
          <Link href="/products" style={{ color: "var(--text)" }}>
            Products
          </Link>
          <Typography style={{ color: "var(--text)" }}>Coffee</Typography>
        </Breadcrumbs>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 mt-8">
        {/* Product Image Section */}
        <div className="lg:col-span-3">
          <div className="lg:flex lg:items-start">
            <div className="lg:order-2 lg:ml-5">
              <div className="max-w-xl overflow-hidden rounded-lg">
                <Magnifier src={productImage} alt={product.name} />
              </div>
            </div>

            <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div className="flex flex-row lg:flex-col">
                {product.images.map((image) => (
                  <Button
                    key={image.id}
                    type="button"
                    onClick={() => setProductImage(image.image.full_size)}
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={image.image.small}
                      alt={product.name}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:col-span-2">
          <Typography variant="h4" component="h1" className="font-bold">
            {product.name}
          </Typography>

          <div className="mt-5 flex items-center">
            <div className="flex items-center text-yellow-500">
              <Rating value={product.rating} />
            </div>
            <Typography
              variant="body2"
              className="ml-2"
              style={{ color: "var(--text)" }}
            >
              {product.num_reviews} Reviews
            </Typography>
          </div>

          <div className="mt-8">
            <Typography variant="body1" className="text-gray-900">
              Coffee Type
            </Typography>
            <RadioGroup row>
              {["Powder", "Whole Bean", "Ground"].map((type) => (
                <FormControlLabel
                  key={type}
                  value={type}
                  control={<Radio />}
                  label={
                    <Typography className="peer-checked:bg-black peer-checked:text-white border border-black px-6 py-2 font-bold rounded-lg">
                      {type}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </div>

          <div className="mt-8">
            <Typography variant="body1" className="text-gray-900">
              Choose subscription
            </Typography>
            <RadioGroup row>
              {["4 Months", "8 Months", "12 Months"].map((plan, index) => (
                <FormControlLabel
                  key={index}
                  value={plan}
                  control={<Radio />}
                  label={
                    <div>
                      <Typography className="peer-checked:bg-black peer-checked:text-white border border-black px-6 py-2 font-bold rounded-lg">
                        {plan}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {index === 0
                          ? "$80/mo"
                          : index === 1
                          ? "$60/mo"
                          : "$40/mo"}
                      </Typography>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-b py-4">
            <div className="flex items-end">
              {product.discounted_price ? (
                <>
                  <Typography variant="h5" className="font-bold">
                    ${product.discounted_price}
                  </Typography>
                  <Typography
                    variant="h5"
                    className="ml-2 text-sm line-through"
                  >
                    ${product.base_price}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    variant="h5"
                    component="span"
                    className="font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    ${product.base_price}
                  </Typography>
                </>
              )}
            </div>
            <div className="flex items-end">
              <Button
                variant="contained"
                className="w-48 h-12"
                sx={{
                  backgroundColor: "var(--accent)",
                  color: "var(--text)",
                  "&:hover": {
                    backgroundColor: "var(--secondary)",
                  },
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <></>
        </div>
        {/* Product Description Section */}
        <div className="lg:col-span-3">
          <div className="border-b border-gray-300">
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm font-medium"
                onClick={() => setActiveTab("description")}
              >
                <Typography
                  className="py-4"
                  sx={{
                    color: "var(--text)",
                    "&:hover": {
                      color: "var(--accent)",
                      borderBottom: "2px solid var(--accent)",
                    },
                  }}
                >
                  Description
                </Typography>
              </Link>
              <Link
                href="#"
                className="text-sm font-medium"
                onClick={() => setActiveTab("additionalInfo")}
              >
                <Typography
                  className="py-4"
                  sx={{
                    color: "var(--text)",
                    "&:hover": {
                      color: "var(--accent)",
                      borderBottom: "2px solid var(--accent)",
                    },
                  }}
                >
                  Addition Information
                </Typography>
              </Link>
            </nav>
          </div>
          <div className="mt-5">
            {activeTab === "description" ? (
              <>
                <h3 className="text-lg font-bold">Product Description</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--text)" }}>
                  {product.description}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold">Additional Information</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {product.additionalInfo}
                </p>{" "}
                {/* Replace with actual additional info */}
              </>
            )}
          </div>
          {/* Reviews */}
          <ul>
            {product.review_list.map((review) => (
              <li key={review.id} className="py-8 text-left border px-4 m-2">
                <div className="flex items-start">
                  <img
                    className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                    src="/images/Ju6-1negUEjTnBKw_ZP4r.png"
                    alt=""
                  />

                  <div className="ml-6">
                    <Rating value={review.rating} />

                    <p className="mt-5 text-base" style={{ color: "var(--text)" }}>
                      {review.comment}
                    </p>
                    <p className="mt-5 text-sm font-bold" style={{ color: "var(--text)" }}>
                      {review.user_username}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: "var(--text)" }}>
                      {review.created_at}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-10 mx-auto max-w-screen-md px-10">
          <div className="flex w-full flex-col">
            <div className="flex flex-col sm:flex-row">
              <h1 className="max-w-sm text-3xl font-bold" style={{ color: "var(--accent)" }}>
                What people think <br />
                about {product.name}
              </h1>
              <div style={{backgroundColor: "var(--background)", border: "1px solid var(--foreground)"}} className="my-4 rounded-xl py-2 px-4 shadow sm:my-0 sm:ml-auto">
                <div className="flex h-16 items-center text-2xl font-bold" style={{ color: "var(--text)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {product.rating}
                </div>
                <p className="text-sm" style={{ color: "var(--text)" }}>Average User Rating</p>
              </div>
            </div>
            <div className="text-gray-700">
              <p className="font-medium" style={{ color: "var(--text)" }}>Reviews</p>
              <ul className="mb-6 mt-2 space-y-2">
                {[...Array(5).keys()].map((_, index) => {
                  const count = starCounts[index];
                  const percentage =
                    totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                  return (
                    <li
                      key={index}
                      className="flex items-center text-sm font-medium"
                    >
                      <p style={{ color: "var(--text)" }}>{index + 1}</p>
                      <span className="mr-4 text-yellow-400">
                        
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          {index}<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>

                      {/* Progress bar */}
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                      {/* Display the review count for this star */}
                      <p className="ml-4" style={{ color: "var(--text)" }}>{count || 0}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button style={{ color: "var(--text)", backgroundColor: "var(--accent)" }} className="w-36 rounded-full py-3 font-medium">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
