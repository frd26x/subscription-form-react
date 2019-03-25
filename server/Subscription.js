const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  duration: {
    type: Number,
    required: true,
    enum: [3, 6, 12]
  },
  amountGb: {
    type: Number,
    required: true,
    enum: [3, 5, 10, 20, 30, 50]
  },
  isPaymentUpfront: {
    type: Boolean,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cardExpirationDate: {
    type: String,
    required: true
  },
  securityCode: {
    type: String,
    required: true
  },
  areTermsAgreed: {
    type: Boolean,
    required: true
  }
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;
