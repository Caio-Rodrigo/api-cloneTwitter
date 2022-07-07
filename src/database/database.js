const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoose connection");
    })
    .catch((error) => {
      console.log(`error connecting to database:${error}`);
    });
};

module.exports = connectToDatabase
