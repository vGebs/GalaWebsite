module.exports = function (mongoose) {
    mongoose.connect("mongodb://localhost:27017/GalaWebsite", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}