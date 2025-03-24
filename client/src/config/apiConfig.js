const API_BASE_URL = import.meta.env.PROD
  ? "https://snap-eats.vercel.app"
  : "http://localhost:5000";

export default API_BASE_URL;
