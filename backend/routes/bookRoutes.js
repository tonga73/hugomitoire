import express from "express";

const router = express.Router();

import { newBook } from "../controllers/bookController.js";

router.post("/", newBook);

export default router;
