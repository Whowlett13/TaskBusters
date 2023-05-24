const router = require("express").Router();

const userRoutes = require("./user");
const jobsRoutes = require("./jobs");

router.use("/user", userRoutes);
router.use("/jobs", jobsRoutes);

module.exports = router;
