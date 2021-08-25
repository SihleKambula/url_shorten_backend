// Requirements
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//express routes
const urlRouter = require("./routes/urlRoutes");
const indexRouter = require("./routes");

// CORS options
const corsOptions = {
  origin: "https://lil-link.vercel.app/",
};

const app = express();

//Middleware
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));

// PORT
const PORT = process.env.PORT || 5000;

//connect to DB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB");
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });



// handing express routes
app.use("/api/url", urlRouter);
app.use("/", indexRouter);
