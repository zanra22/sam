const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000" // Development backend URL
    : "https://your-production-url.com"; // Production backend URL

export default API_BASE_URL;
asd