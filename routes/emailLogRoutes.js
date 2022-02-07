const express = require("express")
const router = express.Router()

const emailLogController = require("../controllers/emailLogController")

router.get("/", emailLogController.main)
router.post("/subscribe", emailLogController.subscribe)

module.exports = router 