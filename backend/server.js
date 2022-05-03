const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5001;
const path = require("path");
const cors = require("cors");
connectDB();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false,limit: "50mb" }));
app.use(cors());

app.use("/api/art", require("./routes/artRoutes"));
app.use("/api/portrait", require("./routes/portraitRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
