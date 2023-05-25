const router = require("express").Router();

const userRoutes = require("./User");
const jobsRoutes = require("./Jobs");

router.use("/User", userRoutes);
router.use("/Jobs", jobsRoutes);

module.exports = router;
