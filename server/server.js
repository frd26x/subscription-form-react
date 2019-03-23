const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Subscription = require("./Subscription");
const cors = require("cors");
const API_PORT = 5000;
const app = express();
const router = express.Router();

// this is our MongoDB database
const uri =
  process.env.MONGODB_URI || `mongodb://localhost/subscription-form-react`;
// connects our back end code with the database
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(
  cors({
    origin: (origin, cb) => {
      console.log(origin, origin && origin.startsWith("http://localhost:"));
      cb(null, origin && origin.startsWith("http://localhost:"));
    },
    optionsSuccessStatus: 200,
    credentials: true
  })
);

router.post("/subscriptions", (req, res) => {
  console.log(req.body);

  Subscription.create(req.body)
    .then(subscription => {
      console.log(subscription);
      return res.json(subscription);
    })
    .catch(err => console.log(err));
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
