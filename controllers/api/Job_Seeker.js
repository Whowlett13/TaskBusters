const router = require("express").Router();
const { Job_Seeker } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", (req, res) => {
  Job_Seeker.findAll({})
    .then((Job_Seeker) => res.json(Job_Seeker))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
