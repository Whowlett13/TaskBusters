const router = require("express").Router();
const Job_ApplyRoutes = require("./api/Job_Apply");
// const Job_PosterRoutes = require("./api/Job_Poster");
const UserRoutes = require("./api/User");
const JobsRoutes = require("./api/Jobs");
router.use("/Job_Apply", Job_ApplyRoutes);
// router.use("/Job_Poster", Job_PosterRoutes);
router.use("/User", UserRoutes);
router.use("/Jobs", JobsRoutes);
router.use((res, req) => {
  res.statusCode(404).end();
});
module.exports = router;
