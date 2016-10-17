'use strict';
const express = require('express'),
app = express(),
bodyparser = require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/player/:country/:lang/:name',function(req,res){
    res.write("country: " + req.params.country);
    res.write("language: " + req.params.lang);
    res.write("name: " + req.params.name);
    res.end();
});

app.post('/abcd',function(req,res){
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    res.send(firstName+"   "+lastName);
    res.end();

});

let port = process.env.PORT||3000;

app.listen(port,function(req,res){
    console.log("catch the request at localhost:"+port);
});