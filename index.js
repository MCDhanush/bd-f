const express = require("express");
const app = express();
const mongoDB = require("./db.js");
const cors = require("cors");

mongoDB();

const corsConfig = {
  origin: "",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://jazzy-piroshki-fa94ee.netlify.app/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

const PORT = 9000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use(express.json());
app.use("/api", require("./Routes/user.controller.js"));
// app.use("/api", require("./Routes/displayData.js"));

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
