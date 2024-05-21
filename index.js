const express = require("express");
const mongoose = require("mongoose");
const jobRouters = require("./router/job");


const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/jobapp")
.then(()=> console.log("success"))
.catch(()=> console.log("fails"));
app.use(jobRouters);



app.listen(6060 , ()=>console.log("server is up and runing at post 8080"));