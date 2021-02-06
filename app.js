// Requirements
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const routerUrl = require("./routes/urlRoutes");
const routerIndex = require("./routes");

// our server
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

//connect to DB
mongoose
  .connect(config.get("mongoURI"), {
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

//Middleware
app.use(express.json({ extended: false }));
app.use("/url_shorten", routerUrl);
app.use("/index", routerIndex);
