const router = require("express").Router();
const Job_ApplyRoutes = require("./Job_Apply");
const UserRoutes = require("./User");
const JobsRoutes = require("./Jobs");
router.use("/Job_Apply", Job_ApplyRoutes);
router.use("/User", UserRoutes);
router.use("/Jobs", JobsRoutes);
router.use((res, req) => {
  // res.statusCode(404).end();
});
module.exports = router;
