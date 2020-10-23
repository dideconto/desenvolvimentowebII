const express = require("express");
const router = express.Router();
const billingCycleController = require("../controllers/BillingCycleController.js");

router.get("/", billingCycleController.get);
router.get("/:cycleId", billingCycleController.getById);
router.post("/", billingCycleController.store);
router.delete("/", billingCycleController.deleteAll);

module.exports = router;
