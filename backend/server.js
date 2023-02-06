require("dotenv").config();
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouter = require("./routes/productRouter.js");
const authRouter = require("./routes/authRouter.js");
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
