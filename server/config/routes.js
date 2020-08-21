const express = require("express");
const router = express.Router();
const billingCycle = require("../models/BillingCycleSchema.js");

router.get("/", (req, res) => {
  res.status(200).json(billingCycle.find({}));
});

router.post("/", (req, res) => {
    var result = billingCycle.create(req.body);
    console.log(req.body);
    res.status(201).json(result);
});

module.exports = router;
