const router = require("express").Router();
const { User, Jobs } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll({
      include: [Jobs],
    });
    res.status(200).json(Jobs);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
