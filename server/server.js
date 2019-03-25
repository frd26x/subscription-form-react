const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Subscription = require("./Subscription");
const cors = require("cors");
const API_PORT = 5000;
const app = express();
const router = express.Router();

const uri =
  process.env.MONGODB_URI || `mongodb://localhost/subscription-form-react`;

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

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
