const router = require("express").Router();
const { Job_Apply, Job_Apply } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Job_Apply.findAll({})
    .then((Job_Apply) => res.json(Job_Apply))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const JobApply = await Job_Apply.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(JobApply);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
