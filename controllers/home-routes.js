const sequelize = require("../config/connection");
const { Jobs, User } = require("../models");
const router = require("express").Router();
//Display all jobs on homepage
router.get("/", (req, res) => {
  Jobs.findAll({
    attributes: [
      "id",
      "job_poster_id",
      "job_seeker_id",
      "job_title",
      "job_description",
      "job_location",
      "job_date",
      "hourly_wage",
      "job_duration",
    ],
  })
    .then((JobsData) => {
      const Jobs = JobsData.map((post) => post.get({ plain: true }));
      res.render("homepage", { Jobs, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//login redirect
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
//sign up redirect
router.get("/signup", (req, res) => {
  res.render("signup");
});
//find a job by id
router.get("/post/:id", (req, res) => {
  Job_Poster.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "content", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
  //render jobview handlebars once job has been selected
    .then((PostData) => {
      if (!PostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = PostData.get({ plain: true });
      console.log(post);
      res.render("jobview", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
