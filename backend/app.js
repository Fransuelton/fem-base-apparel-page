import express from "express";
import cors from "cors";

import subscribe from "./routes/subscribe.js";

import subscribeLimiter  from "./middleware/rateLimit.middleware.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/subscribe", subscribeLimiter, subscribe);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
