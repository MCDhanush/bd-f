const express = require("express");
const app = express();
const mongoDB = require("./db");
mongoDB();

const PORT = 9000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
