const router = require("express").Router();
const Job_Apply = require("../../models");
const withAuth = require("../../utils/auth");
// const sequelize = require("../config/connection");
//Find all jobs that you can apply to
// router
//   .get("/", (req, res) => {
//     Job_Apply.findAll({
//       attributes: ["id", "user_id", "job_id", "comment_text"],
//     });
//   })
//   .then((Job_Apply) => res.json(Job_Apply.reverse()))
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });

router.get("/", withAuth, (req, res) => {
  Job_Apply.findAll({
    attributes: ["id", "user_id", "job_id", "comment_text"],
  })
    .then((dbJob_Apply) => res.json(dbJob_Apply))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post("/", withAuth, (req, res) => {
//   if (req.session) {
//     Job_Apply.create({
//       user_id: req.body.user_id,
//       job_id: req.body.job_id,
//       comment_text: req.body.comment_text,
//     });
//   }
// });

router.put("/:id", async (req, res) => {
  // update a Job by by its `id` value
  try {
    const JobApply = await Job_Apply.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(JobApply);
  } catch (err) {
    res.status(400).json(err);
  }
});
//Remove a job posting
router.delete("/:id", withAuth, (req, res) => {
  Job_Apply.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((Job_Apply) => {
      if (!Job_Apply) {
        res.status(404).json({ message: "No Job found with this id" });
        return;
      }
      res.json(Job_Apply);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
