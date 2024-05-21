const express = require("express");
const mongoose = require("mongoose");
const jobRouters = require("./router/job");


const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://pdd2498:QfR0HjqaAz3laXlA@cluster0.zia4lho.mongodb.net/")
.then(()=> console.log("success"))
.catch(()=> console.log("fails"));
app.use(jobRouters);



app.listen(10000 , ()=>console.log("server is up and runing at post 8080"));