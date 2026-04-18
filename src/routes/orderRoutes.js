import express from "express";
import { createOrder, getMyOrders ,getAllOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);
router.get("/admin", protect, getAllOrders);

export default router;