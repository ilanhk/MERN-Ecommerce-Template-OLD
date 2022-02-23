import express from "express";
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile); // to implement middleware need to put it as 1st argument in .get() after that the middleware would run on that route

export default router;