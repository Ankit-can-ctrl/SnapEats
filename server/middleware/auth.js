import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.id;
    next();
  } catch (error) {
    console.log("error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default auth;
