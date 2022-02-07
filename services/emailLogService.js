const Subscription = require("../models/subscription")

const createSubscription = async (birthday, name, gender, email) => {
    //create a new subscription 
    try {
        const newSub = new Subscription({
            birthday: birthday,
            name: name,
            gender: gender,
            email: email
        })
        await newSub.save()
        console.log("emailService: Successfully added new subscription")
    } catch (e) {
        console.log("emailLogService: Failed to add new subscription")
        throw e
    }
}

const getSubscription = async (email) => {
    //Get subscription with email

    const filter = {
        email: email
    }

    try {
        const emails = await Subscription.find(filter)
        console.log("emailLogService: Successfully fetched subscriptions")
        
        return emails
    } catch (e) {
        console.log("emailLogService: Failed to fetch emails with input email: " + email)
        throw e
    }
}

module.exports = {
    createSubscription,
    getSubscription
}