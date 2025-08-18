import { rateLimit } from "express-rate-limit";

const subscribeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: {
    success: false,
    status: 429,
    message: "Too many registration attempts. Please try again later.",
  },
});

export default subscribeLimiter;
