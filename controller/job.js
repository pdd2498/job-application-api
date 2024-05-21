const jobModel = require("../models/job");


const createJob = async (req , res)=>{
    const newJob = new jobModel(req.body);
    const jobDataSave = await newJob.save();
    res.json({
        success:true,
        message:"job addate ",
        id: jobDataSave.id
    });
};

const listJob = async (req , res)=>{
    const jobList = await jobModel.find();
    
    res.json({
        success:true,
        message:"list jobs",
        results: jobList
    });
};


const editJob = async (req , res)=>{
    const jobId = req.params.id;
    await jobModel.findByIdAndUpdate(jobId , req.body);
    res.json({
        success:true,
        message:"update successe "
    });
};
 

const deleteJob = async (req , res)=>{
    const jobId = req.params.id;
    await jobModel.findByIdAndDelete(jobId);
    res.json({
        success:true,
        message:"job belete"
    });
};

const jobControler = {
    createJob,
    listJob,
    editJob,
    deleteJob
}; 

module.exports = jobControler;

