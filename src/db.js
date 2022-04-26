const config = require("config");
const mongoose = require("mongoose");
const { connectionstring } = config.get("database");

const dbConnect = () => {
  mongoose.connect(connectionstring);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection failed: "));
  db.once("open", () => {
    console.log("connected successfully");
  });
};

module.exports = dbConnect;
