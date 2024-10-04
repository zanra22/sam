import { SvgIcon } from "@mui/material";
import React from "react";

// Reusable StarIcon component to render different states of stars
const StarIcon = ({ filled, halfFilled }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-400"}`}
  >
    {/* Full Star Path */}
    {filled ? (
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    ) : halfFilled ? (
      <g>
        <defs>
          <linearGradient id="half-gradient">
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#BDBDBD" />
          </linearGradient>
        </defs>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="url(#half-gradient)"
        />
      </g>
    ) : (
      <SvgIcon viewBox="0 0 24 24" className="h-5 w-5 text-gray-400">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />{" "}
      </SvgIcon>
    )}
  </SvgIcon>
);

const Rating = ({ value }) => {
  // Ensure value is a number and handle the case when there's no rating
  const numericValue = Number(value);

  // Check for no rating case
  if (numericValue <= 0 || isNaN(numericValue)) {
    return (
      <div className="flex items-center">
        <span className="text-sm font-semibold text-gray-500">No Rating</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1; // Star values: 1, 2, 3, 4, 5
        const isFilled = numericValue >= starValue; // Full star
        const isHalf =
          numericValue >= starValue - 0.5 && numericValue < starValue; // Half star

        return (
          <span key={index}>
            <StarIcon filled={isFilled} halfFilled={isHalf} />
          </span>
        );
      })}
      <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
        {numericValue.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
