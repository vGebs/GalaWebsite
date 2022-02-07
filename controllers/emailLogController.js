const emailLogService = require("../services/emailLogService")

const main = (req, res) => {
    res.sendFile("emailListForm.html", {
        root: '../galawebsite/views'
    })
}

const subscribe = async (req, res) => {
    // we need to fetch the db and check to see if the email already exists
    // If it doesn't, then we add the new subscription to the db
    const bday = req.body.birthday
    const name = req.body.name
    const female = req.body.female
    const male = req.body.male
    const email = req.body.email

    const duplicate = await getSubs_handleError(email)
    console.log("Duplicates: "  + duplicate)
    if (typeof female == 'string') {
        //its a female
        if (!duplicate.length) {
            //add subscriber
            await pushSub_HandleError(bday, name, "female", email)
        } else {
            //do not add subscriber
            console.log("not adding user")
        }
    } else {
        //its a male
        if (!duplicate.length) {
            //add subscriber
            await pushSub_HandleError(bday, name, "male", email)
        } else {
            //do not add subscriber
            console.log("not adding user")
        }
    }

    res.redirect("/")
}

module.exports = {
    main,
    subscribe
}

// MARK: - Private functions -------------------------------------------------------->

const getSubs_handleError = async (email) => {
    try {
        const duplicate = await emailLogService.getSubscription(email)
        return duplicate
    } catch (e) {
        console.log("emailLogService: Failed to fetch subs")
    }
}

const pushSub_HandleError = async (bday, name, gender, email) => {

    try {
        await emailLogService.createSubscription(bday, name, gender, email)
    } catch (e) {
        console.log(e)
    }
}