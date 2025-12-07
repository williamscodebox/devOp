// hello.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker + Node!");
});

// Keep the server alive on port 3000
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
