const router = require("express").Router();
const Job_ApplyRoutes = require("./Job_Apply");
const Job_PosterRoutes = require("./Job_Poster");
const User = require("./User");
const Jobs = require("./Jobs");
router.use("/Job_Apply", Job_ApplyRoutes);
router.use("/Job_Poster", Job_PosterRoutes);
router.use("/User", UserRoutes);
router.use("/Jobs", Jobs);
router.use((res, req) => {
  res.statusCode(404).end();
});
module.exports = router;
