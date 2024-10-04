import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const calculateDiscountPercentage = () => {
    if (product.discounted_price && product.base_price) {
      const discount = Math.round(
        ((product.base_price - product.discounted_price) / product.base_price) *
          100
      );
      return `${discount}%`;
    } else {
      return null;
    }
  };

  const discountPercentage = calculateDiscountPercentage();

  // Assuming you want to display the first image from the images array
  const productImage =
    product.images.length > 0 ? product.images[0].image.full_size : "";

  return (
    <Card
      style={{
        backgroundColor: "var(--background)",
        border: "3px solid var(--navigation)",
      }}
      className="mb-4 overflow-hidden rounded-lg shadow-md duration-500 hover:shadow-xl"
    >
      {/* Image Section */}
      <Link
        href={`/product/${product.id}`}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <CardMedia
          component="img"
          alt={product.name}
          height="240"
          image={productImage}
          className="object-cover"
          loading="lazy"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-sm font-medium text-white">
          {discountPercentage}
        </span>
      </Link>

      {/* Product Details */}
      <CardContent className="mt-4 px-5 pb-5">
        <a href="#">
          <Typography
            variant="h5"
            component="div"
            className="text-xl tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {product.name}
          </Typography>
        </a>

        <Box className="mt-2 mb-5 flex items-center justify-between">
          <div>
            {product.discounted_price ? (
              <>
                <Typography
                  variant="h5"
                  component="span"
                  className="font-bold"
                  style={{ color: "var(--text)" }}
                >
                  ${product.discounted_price}
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  className="ml-2 text-xs line-through"
                  style={{ color: "var(--text)" }}
                >
                  ${product.base_price}
                </Typography>
              </>
            ) : (
              <Typography
                variant="h5"
                component="span"
                className="font-bold "
                style={{ color: "var(--text)" }}
              >
                ${product.base_price}
              </Typography>
            )}
          </div>

          {/* Rating Section */}
          <div className="flex items-center">
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              className="text-yellow-300"
            />
          </div>
        </Box>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--accent)",
            color: "var(--text)",
            "&:hover": {
              backgroundColor: "var(--secondary)",
            },
          }}
          className="flex items-center justify-center w-full focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
