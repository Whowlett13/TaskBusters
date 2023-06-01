const router = require("express").Router();
const { Jobs } = require("../../models");
const withAuth = require("../../utils/auth");

//find all job details
router.get("/", (req, res) => {
  Jobs.findAll({
    attributes: [
      "id",
      "user_id",
      "job_title",
      "job_description",
      "job_location",
      "job_date",
      "hourly_wage",
      "job_duration",
    ],
  })
    .then((Jobs) => res.json(Jobs.reverse()))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a new job
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Jobs.create({
      // job_poster_id: req.body.job_poster_id,
      user_id: req.session.user_id,
      job_title: req.body.job_title,
      job_description: req.body.job_description,
      job_location: req.body.job_location,
      job_date: req.body.job_date,
      hourly_wage: req.body.hourly_wage,
      job_duration: req.body.job_duration,
    })
      .then((JobData) => res.json(JobData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
//update a job
router.put("/:id", withAuth, (req, res) => {
  Jobs.update({
    where: {
      id: req.params.id,
    },
  })
    .then((JobData) => {
      if (!JobData) {
        res.status(404).json({ message: "No Jobs found with this id" });
        return;
      }
      res.json(JobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//delete a job
router.delete("/:id", withAuth, (req, res) => {
  Jobs.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbJobsData) => {
      if (!dbJobsData) {
        res.status(404).json({ message: "No Jobs found with this id" });
        return;
      }
      res.json(dbJobsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
