import { SvgIcon } from '@mui/material';
import React from 'react';

// Reusable StarIcon component to render different states of stars
const StarIcon = ({ filled, halfFilled }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : halfFilled ? 'url(#half-gradient)' : 'none'}
    stroke="currentColor"
    className={`h-5 w-5 ${filled || halfFilled ? 'text-yellow-300' : 'text-gray-300'}`}
  >
    {/* Full Star Path */}
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
    {/* Define the half-fill gradient */}
    <defs>
      <linearGradient id="half-gradient">
        <stop offset="50%" stopColor="#FBBF24" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </SvgIcon>
);

const Rating = ({ value }) => {
  // Handle no rating case
  if (value == 0.0 || !value) {
    return (
      <div className="flex items-center">
        <span className="text-sm font-semibold text-gray-500">No Rating</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const filled = value >= starValue;
        const halfFilled = value >= starValue - 0.5 && value < starValue;

        return (
          <span key={index}>
            <StarIcon filled={filled} halfFilled={halfFilled} />
          </span>
        );
      })}
      <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
        {value}
      </span>
    </div>
  );
};

export default Rating;
