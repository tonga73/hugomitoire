import express from "express";
import multer from "multer";

const router = express.Router();

import { newBook, getBooks } from "../controllers/bookController.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./controllers/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

router.route("/").get(getBooks).post(upload.single("image"), newBook);

export default router;
