const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 2121;
const buildPath = "../client/build";

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(buildPath));
app.get("/home", (req, res) => {
  res.send("Home Page Api is running ");
});
app.post("/test", (req, res) => {
  const a = [
    { name: "Yadnesh", age: 24 },
    { name: "Pritesh", age: 22 },
  ];
  res.send(a);
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../", "client", "build", "index.html"));
});

app.listen(PORT, async () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
