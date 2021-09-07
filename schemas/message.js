const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: 1,
    required: false,
  },
  userRole: {
    type: Number,
    required: false,
  },
  content: {
    type: String,
    required: false,
    maxlength: 1000,
  },
  isImage: {
    type: Boolean,
    default : 0,
    required: false,
  },
  imageInfo: {
    data : {
      type: Buffer,
      required: false,
    },
    contentType : {
      type: String,
      required: false,
    },
  },
  sendDate : {
    type: Date,
    default: Date.now,
    required: false,
  },
});

module.exports = { messageSchema };