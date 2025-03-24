const API_BASE_URL = import.meta.env.PROD
  ? "https://snap-eats.vercel.app" // Remove the trailing slash
  : "http://localhost:5000";

export default API_BASE_URL;
