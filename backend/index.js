import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

const port = process.env.PORT || 4000;

app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
