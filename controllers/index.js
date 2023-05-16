const router = require("express").Router();
const Job_ApplyRoutes = require("./api/Job_Apply");
const Job_PosterRoutes = require("./api/Job_Poster");
const Job_SeekerRoutes = require("./api/Job_Seeker");
const Jobs = require("./Jobs");
router.use("/Job_Apply", Job_ApplyRoutes);
router.use("/Job_Poster", Job_PosterRoutes);
router.use("/Job_Seeker", Job_SeekerRoutes);
router.use("/Jobs", Jobs);
router.use((res, req) => {
  res.statusCode(404).end();
});
module.exports = router;
