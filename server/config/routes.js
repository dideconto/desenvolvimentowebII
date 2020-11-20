const express = require("express");
const router = express.Router();
const billingCycleController = require("../controllers/BillingCycleController.js");

router.get("/", billingCycleController.get);
router.get("/dashboard", billingCycleController.dashboard);
router.get("/:cycleId", billingCycleController.getById);
router.get("/:year/:month", billingCycleController.getByMonthYear);
router.post("/", billingCycleController.store);
router.delete("/", billingCycleController.deleteAll);
router.put("/", billingCycleController.update);
router.delete("/:cycleId", billingCycleController.delete); 

module.exports = router;
