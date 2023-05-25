const router = require("express").Router();

const userRoutes = require("./User");
const jobsRoutes = require("./jobs");

router.use("/User", userRoutes);
router.use("/jobs", jobsRoutes);

module.exports = router;
