const express = require("express");
const { success, info, error } = require("consola");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/auth");
const MovieRoutes = require("./routes/movie");
const { DbConnection } = require("./config/db");
const { PORT, NODE_ENV } = require("./config");
const app = express();

let StartServer = async () => {
  // =======database connection starts here======
  DbConnection();
  //   =======database connection ends here=====

  //   !======middleware section starts here=====
  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
    // morgan used for console logging purpose
  }

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  // !====moddleware section ends here=====

  //   ?------load all routes----
  app.use("/api/auth/", AuthRoutes);
  app.use("/api/movies/", MovieRoutes);

  //   port listening starts here
  app.listen(PORT, (err) => {
    if (err) throw err;
    info(`server is running on port number ${PORT}`.red.bold);
  });
};

StartServer();
