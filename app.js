var express = require("express");
const app = express();
const path = require('path')

app.set('view engine', 'ejs')

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/gcp", (req, res) => res.render("gcp"));


app.listen(process.env.PORT || 3000, () => console.log("server started"));
