const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const eventRoutes = require("./router/events");
const registerRoutes = require("./router/register");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use("/api/events", eventRoutes);
app.use("/api/register", registerRoutes);

console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});