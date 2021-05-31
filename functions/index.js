const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IcAS8GDwiQBU3r8jNdarVxFY1TWxkV99g32EiQARnqXKSkQhUf7uJpXAjaQzArCAXt61TYCJacKLOkKOUqgaeeL0031icWXmQ"
);

// API

// - APP config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // this helps us to send data and pass data in json format

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received BOOM!!! >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
// app.listen(localhost, 9000);
// | this is the setup we need to get the backend express app running on a cloud function

// example end point api
// http://localhost:5001/clone-challenge-59c39/us-central1/api
