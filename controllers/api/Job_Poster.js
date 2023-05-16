const router = require("express").Router();
const { Job_Poster } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", (req, res) => {
  Job_Poster.findOne({})
    .then((Job_Poster) => res.json(Job_Poster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const jobPost = await Job_Poster.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(jobPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
