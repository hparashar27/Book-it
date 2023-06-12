const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://hparashar617:hparashar27@cluster0.risvet9.mongodb.net/", {
      // useNewUrlParser: true, // Use new URL parser instead of deprecated one
      // useUnifiedTopology: true, // Remove this option
      // useFindAndModify: false, // Remove this option
      // useCreateIndex: true, // Remove this option
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
