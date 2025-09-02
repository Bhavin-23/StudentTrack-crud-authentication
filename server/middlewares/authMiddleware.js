const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) return res.status(401).json({ error: "Unauthorized user" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // userId
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = authMiddleware;
