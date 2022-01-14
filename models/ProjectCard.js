const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descStr: {
        type: String,
        required: true,
    },
    linkObj: {
        type: Object,
        required: true,
    },
    codesArr: {
        type: Array,
        required: true,
    },
    likes: {
        type: String,
        default: "0",
    },
    dislikes: {
        type: String,
        default: "0",
    },
    date: {
        type: Date,
        default: new Date(),
    },
    beautifyDate: {
        type: String,
        default: new Date().toDateString()
    }
})

module.exports = mongoose.model('ProjectCard', ProjectSchema);