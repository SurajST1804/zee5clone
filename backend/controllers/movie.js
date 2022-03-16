// const MovieSchema = require("../models/Movies");

// exports.PostMovie = async (req, res) => {
//   let {
//     movie_name,
//     movie_lang,
//     movie_duration,
//     movie_genere,
//     movie_poster,
//     movie_video,
//   } = req.body;
//   try {
//     let payload = {
//       movie_name,
//       movie_lang,
//       movie_duration,
//       movie_genere,
//       movie_poster,
//       movie_video,
//     };
//     let film = await MovieSchema.create(payload);
//     console.log(film);
//     res.status(201).json({ message: "Successfully created" });
//   } catch (error) {
//     console.log(error);
//     res.status(501).json("Server Error");
//   }
// };
