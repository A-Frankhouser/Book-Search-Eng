const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://A-Frankhouser:Youngvase762@cluster1.hrgusvi.mongodb.net/Book-Search-Eng?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
