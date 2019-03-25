import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  postSubscription(subscription) {
    return service
      .post("/subscriptions", subscription)
      .then(res => res.data)
      .catch(errHandler);
  }
};
