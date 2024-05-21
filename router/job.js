const express = require("express");
const jobControler = require("../controller/job")

const router = express.Router();

router.post("/api/jobs" , jobControler.createJob);

router.get("/api/jobs" , jobControler.listJob);

router.put("/api/jobs/:id" , jobControler.editJob);

router.delete("/api/jobs/:id" , jobControler.deleteJob);

module.exports = router;