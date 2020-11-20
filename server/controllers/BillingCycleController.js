const billingCycle = require("../models/BillingCycleSchema.js");
//lodash

//npm install @angular/cli -g
//ng -v
//ng -help

class BillingCycleController {
  async store(req, res) {
    try {
      var result = await billingCycle.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByMonthYear(req, res) {
    let year = Number(req.params.year);
    let month = Number(req.params.month);
    let cycles = await billingCycle.find({}).sort({ date: -1 });
    for (let cycle of cycles) {
      if (
        cycle.date.getFullYear() === year &&
        cycle.date.getMonth() === month
      ) {
        return res.status(200).json(cycle);
      }
    }
    console.log("123123");
    return res.status(404).json({msg:"Não encontrado!"});
  }

  async get(req, res) {
    var result = await billingCycle.find({}).sort({ date: -1 });
    res.status(200).json(result);
  }

  async getById(req, res) {
    var result = await billingCycle.findById(req.params.cycleId);
    res.status(200).json(result);
  }

  async deleteAll(req, res) {
    var result = await billingCycle.deleteMany();
    res.status(200).json(result);
  }

  async update(req, res) {
    let cycle = req.body;
    var result = await billingCycle.updateOne({ _id: cycle._id }, cycle);
    res.status(200).json(result);
  }

  async delete(req, res) {
    await billingCycle.deleteOne({ _id: req.params.cycleId });
    var result = await billingCycle.find({});
    res.status(200).json(result);
  }

  async dashboard(req, res) {
    let result = await billingCycle.find({});
    let totalCredits = 0;
    let totalDebits = 0;
    for (let cycle of result) {
      for (let credit of cycle.credits) {
        totalCredits += credit.value;
      }
      for (let debit of cycle.debits) {
        totalDebits += debit.value;
      }
    }
    console.log({totalCredits, totalDebits});
    res.status(200).json({totalCredits, totalDebits});
  }
}

module.exports = new BillingCycleController();
