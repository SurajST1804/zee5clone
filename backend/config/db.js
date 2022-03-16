const { connect } = require("mongoose");
const { success, error, info } = require("consola");
const { MONGODB_URL_CLOUD, MONGODB_URL_LOCAL, NODE_ENV } = require("./index");

exports.DbConnection = async () => {
  try {
    if (NODE_ENV === "development") {
      await connect(MONGODB_URL_LOCAL);
      success(
        `Local Mongodb Database Connected ${NODE_ENV} mode`.bgMagenta.bold
      );
    } else {
      await connect(MONGODB_URL_CLOUD);
      success("Cloud Mongodb Database connected");
    }
  } catch (err) {
    error(err);
  }
};
