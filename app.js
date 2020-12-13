// jshint esversion: 6
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

const app = express();
const path = require('path');

var formMessage = "";

// View Engine
app.set('view engine', 'ejs');


// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/userMessageDB", 
{useNewUrlParser: true, useUnifiedTopology: true});

const messageSchema = {
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now}
};

const Message = new mongoose.model("Message", messageSchema);

// Routes
app.get("/", (req, res) => {
    res.render("index");
});


// , {formMessage}
app.get("/gcp", (req, res) => res.render("gcp"));

app.post("/sendMessage", (req, res) => {
    console.log(req, res);

    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    console.log(res);

    // const newMessage = new Message({
    //     name: name,
    //     email: email,
    //     message: message
    // });

    name = req.body.name;

    newMessage.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("successful");
            mongoose.connection.close();
        }
    });
});

port = (process.env.PORT || 3000);

app.listen(port, () => console.log("Server started at Port " + port));
