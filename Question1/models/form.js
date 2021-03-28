const mongoose = require("mongoose")
const formSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Useremail: {
        type: String,
        required: true
    },
    Userscaling: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        requiired: true
    },
    content: {
        type: String,
        required: true
    }


});
const Formdata = new mongoose.model("Formdata", formSchema);
module.exports = Formdata