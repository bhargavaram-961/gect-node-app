import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

// app.listen(8080, () => {
//   mongoose.connect(${MONGODB_URI});
//   console.log("Server Started at 8080");

// });
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });