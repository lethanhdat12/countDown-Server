const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/countDown", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err) => {
    if (err) {
      console.log(" Không thể kết nối đến DB , Error : " + err);
    }
    else {
      console.log("Connected successfully");
    }
  }
);

module.exports = mongoose;