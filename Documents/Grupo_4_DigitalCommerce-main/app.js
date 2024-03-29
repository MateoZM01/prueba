const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Servidor Funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/registro", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/product_detail", (req, res) => {
  res.sendFile(__dirname + "/views/product_Detail.html");
});
