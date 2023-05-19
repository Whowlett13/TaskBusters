const router = require("express").Router();
const { Jobs } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", (req, res) => {
  Jobs.findAll({
    attributes: [
      "id",
      "job_poster_id",
      "job_seeker_id",
      "job_title",
      "job_description",
      "job_location",
      "job_date",
      "hourly_wage",
      "job_duration",
    ],
  })
    .then((dbJobs) => res.json(dbJobs.reverse()))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Jobs.create({
      job_poster_id: req.body.job_poster_id,
      job_seeker_id: req.body.job_seeker_id,
      job_title: req.body.job_title,
      job_description: req.body.job_description,
      job_location: req.body.job_location,
      job_date: req.body.job_date,
      hourly_wage: req.body.hourly_wage,
      job_duration: req.body.job_duration,
    })
      .then((dbJobData) => res.json(dbJobData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
router.put("/:id", withAuth, (req, res) => {
  Jobs.update({
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
