const router = require("express").Router();
const { Jobs } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", (req, res) => {
  Jobs.findAll({})
    .then((Jobs) => res.json(Jobs))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
module.exports = router;
