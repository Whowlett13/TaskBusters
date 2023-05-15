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

module.exports = router;

