const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/movieposter");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const videostorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/movievideo");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

module.exports = { storage, videostorage };
