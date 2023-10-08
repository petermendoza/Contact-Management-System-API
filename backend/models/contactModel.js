const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    // Fill out fields you want in schema
    name: {
        type: String,
        // Required flag true, if it doesn't meet requirement then give message
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add the email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the phone number"]
    }
}, {
    // Add timestamps to when you add
    timestamps: true,
});

// Export model as module,
module.exports = mongoose.model("Contact", contactSchema)