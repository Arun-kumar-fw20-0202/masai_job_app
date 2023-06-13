const express = require("express");
const { jobModel } = require("../Models/job.model");
const jobRouter = express.Router();

//CREATE
jobRouter.post("/add", async (req, res) => {
  try {
    const newJob = new jobModel(req.body);
    await newJob.save();
    res.status(200).send({ msg: "Job added successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//READ
jobRouter.get("/", async (req, res) => {
  let { role, language, limit, page, sort } = req.query;
  let query = {};

  if (role) {
    query.role = role;
  }

  if (language) {
    query.language = language;
  }

  let sortBy = {};

  if (sort) {
    if (sort == "asc") {
      sortBy.postedAt = 1;
    } else if (sort == "desc") {
      sortBy.postedAt = -1;
    } else {
      sortBy = {};
    }
  }

  try {
    const job = await JobModel.find(query)
      .sort(sortBy)
      .skip(limit * (page - 1))
      .limit(limit);

    res.status(200).send(job);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { jobRouter };
