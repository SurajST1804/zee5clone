const { Schema, model } = require("mongoose");
const MovieSchema = new Schema(
  {
    movie_name: { type: String, required: true },
    movie_lang: { type: [""], required: true },
    movie_duration: { type: String, required: true },
    movie_genere: { type: [""], required: true },
    movie_poster: {
      type: [""],
      required: true,
      default:
        "https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1643957331~hmac=616769d4835a3431de04d5040aa41893",
    },
    movie_video: {
      type: [""],
      required: true,
      default:
        "https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1643957331~hmac=616769d4835a3431de04d5040aa41893",
    },
  },
  { timestamps: true }
);

module.exports = model("movie", MovieSchema);
