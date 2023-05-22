const router = require("express").Router();
const Job_Apply = require("../../models");
const withAuth = require("../../utils/auth");

//Find all jobs that you can apply to
router.get("/", (req, res) => {
  Job_Apply.findAll()
    .then((dbJob_Apply) => res.json(dbJob_Apply))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
router.delete("/:id", withAuth, (req, res) => {
  Job_Apply.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbJob_Apply) => {
      if (!dbJob_Apply) {
        res.status(404).json({ message: "No Job_Apply found with this id" });
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
