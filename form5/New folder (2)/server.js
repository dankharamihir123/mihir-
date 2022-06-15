const express = require('express');

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Neel:neel201001@cluster0.trjxx.mongodb.net/studentdb", {useNewUrlParser:true}, {useUnifiedTopology: true});

const notesSchema ={
    title:String,
    content: String
}
const Note =mongoose.model("notes", notesSchema);
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res) {
    let newNote = Note({
        title:req.body.title,
        content: req.body.content
    });
newNote.save();
res.redirect('/');

    })
app.listen(3000,function() {

console.log("server is running on 3000");
})
