const mongoose = require("mongoose")

const {
    Schema,
} = mongoose.Schema

const IssueSchema = new mongoose.Schema({

    project: {
        type: String,
        required: [true, "Please provide a projectname"],
        maxlength: 50
    },
    issue_title: {
        type: String,
        required: [true, "Please provide a title"],
        maxlength: 30
    },
    issue_text: {
        type: String,
        required: [true, "Please provide an issue text"],
        maxlength: 200
    },
    //  created_on: Date,
    //  updated_on: Date,
    created_by: {
        type: String,
        required: [true, "Please provide name of issuer"],
        maxlength: 24
    },
    assigned_to: {
        type: String,
        maxlength: 24,
        default: ""
    },
    status_text: {
        type: String,
        maxlength: 24,
        default: ""
    },
    open: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

// Sets the createdAt parameter equal to the current time
IssueSchema.pre('save', function (next) {
    const now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
module.exports = mongoose.model('Issue', IssueSchema)