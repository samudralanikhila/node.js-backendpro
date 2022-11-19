const express = require("express");
const app = express();
const data1 = require("./Routes/Bollywood");
const data2 = require("./Routes/Hollywood");
const data3 = require("./Routes/Fitness");
const data4 = require("./Routes/Food")
const data5 = require("./Routes/Technology")
const cors = require("cors");
app.use(cors());

app.use("/home", data1);
app.use("/home", data2);
app.use("/home", data3);
app.use("/home", data4);
app.use("/home", data5);

app.listen(process.env.PORT || 8080, () => {
  console.log("server running");
});
