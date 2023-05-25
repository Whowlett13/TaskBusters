const router = require("express").Router();

const UserRoutes = require("./User");
const JobsRoutes = require("./Jobs");

router.use("/User", UserRoutes);
router.use("/Jobs", JobsRoutes);

module.exports = router;
