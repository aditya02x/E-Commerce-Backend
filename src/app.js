import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();


const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "http://localhost:3000",
  "https://e-commerce-frontend-rho-one.vercel.app/"
];
pp.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);


app.get("/", (req, res) => {
  res.send("API running...");
});

export default app;