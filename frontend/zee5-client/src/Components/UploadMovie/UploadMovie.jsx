import React, { useState } from "react";
// import axios from "./../../helpers/Axios";
import axios from "axios";
const UploadMovie = () => {
  let [state, setState] = useState({
    movie_name: "",
    movie_lang: [],
    movie_duration: "",
    movie_genere: [],
  });

  let [image, setImage] = useState("");

  let [video, setVideo] = useState("");

  let { movie_name, movie_lang, movie_duration, movie_genere } = state;
  // let { movie_poster } = image;
  // let { movie_video } = video;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleCheckbox = (e) => {
    let arr = state.movie_lang;
    arr.includes(e.target.value)
      ? arr.splice(arr.indexOf(e.target.value), 1)
      : arr.push(e.target.value);
    setState({ ...state, movie_lang: arr });
  };
  let handleCheckbox1 = (e) => {
    let arr = state.movie_genere;
    arr.includes(e.target.value)
      ? arr.splice(arr.indexOf(e.target.value), 1)
      : arr.push(e.target.value);
    setState({ ...state, movie_genere: arr });
  };

  let handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  let handleVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(payload);
    console.log(image);
    console.log(video);
    const formData = new FormData();
    formData.append("movie_name", movie_name);
    formData.append("movie_lang", movie_lang);
    formData.append("movie_duration", movie_duration);
    formData.append("movie_genere", movie_genere);
    formData.append("movie_poster", image);
    formData.append("movie_video", video);
    let data = await axios.post(
      "http://localhost:5000/api/movies/moviepost",
      formData
    );
    console.log(data);
  };
  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Upload movie detailes </h2>
          </div>
          <div>
            <label htmlFor="movie_name">Movie Name</label>
            <input
              type="text"
              name="movie_name"
              id="movie_name"
              placeholder="Enter movie name"
              value={movie_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="movie_lang">Movie Lang</label>
            <div onChange={handleCheckbox}>
              <input type="checkbox" name="movie_lang" value="Kannada" />
              Kannada
              <input type="checkbox" name="movie_lang" value="Hindi" />
              Hindi
              <input type="checkbox" name="movie_lang" value="English" />
              English
            </div>
          </div>
          <div>
            <label htmlFor="movie_duration">Movie Duration</label>
            <input
              type="text"
              name="movie_duration"
              id="movie_duration"
              placeholder="Enter movie duration"
              value={movie_duration}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="movie_genere">Movie Genere</label>
            <div onChange={handleCheckbox1}>
              <input type="checkbox" name="movie_genere" value="Action" />
              Action
              <input type="checkbox" name="movie_genere" value="Drama" />
              Drama
              <input type="checkbox" name="movie_genere" value="Thriller" />
              Thriller
            </div>
          </div>
          <div>
            <label htmlFor="movie_poster">Movie Poster</label>
            <input
              type="file"
              name="movie_poster"
              id="movie_poster"
              onChange={handleImage}
            />
          </div>
          <div>
            <label htmlFor="movie_video">Movie Video</label>
            <input
              type="file"
              name="movie_video"
              id="movie_video"
              onChange={handleVideo}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadMovie;
