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
