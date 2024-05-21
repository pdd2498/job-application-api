const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title : {
        type: String,
    },
    description:{
        type: String,
    },
    compnay:{
        type: String,
    },
    location: {
        type: String,
    },
    salary : {
        type: Number,
    },
});

const jobModel = mongoose.model("jobs" , jobSchema);
module.exports = jobModel;