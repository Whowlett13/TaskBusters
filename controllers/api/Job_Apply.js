const router = require("express").Router();
const { Job_Apply } = require("../../Models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Job_Apply.findAll({})
    .then((Job_Apply) => res.json(Job_Apply))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
