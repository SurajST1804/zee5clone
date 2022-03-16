// const multer = require("multer");

// let { storage, videostorage } = require("../middlewares/multer");
// let upload = multer({ storage, videostorage });

// const { Router } = require("express");
// const { PostMovie } = require("../controllers/movie");
// const router = Router();

// router.route("/moviepost").post(PostMovie, upload.single("movie_poster"));

// module.exports = router;

// directly writting everything in router

const { Router } = require("express");
const router = Router();
const multer = require("multer");
const MovieSchema = require("../models/Movies");

let { storage, videostorage } = require("../middlewares/multer");
const upload = multer({ storage: storage });

router.post(
  "/moviepost",
  upload.fields([{ name: "movie_poster" }, { name: "movie_video" }]),
  async (req, res) => {
    let payload = {
      movie_name: req.body.movie_name,
      movie_lang: req.body.movie_lang,
      movie_duration: req.body.movie_duration,
      movie_genere: req.body.movie_genere,
      movie_poster: req.files.movie_poster,
      movie_video: req.files.movie_video,
    };
    await MovieSchema.create(payload);
    console.log(req.body);
    console.log(req.file);
    res.send("ok");
  }
);

module.exports = router;
