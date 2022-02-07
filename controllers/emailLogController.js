const emailLogService = require("../services/emailLogService")

const main = (req, res) => {
    res.sendFile( "emailListForm.html", {root: '../galawebsite/views'})
}

const subscribe = (req, res) => { }

module.exports = { main, subscribe }