import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg : "hello World satyam"});
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
