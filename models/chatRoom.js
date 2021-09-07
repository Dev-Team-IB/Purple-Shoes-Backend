const mongoose = require("mongoose");

const { messageSchema } = require("../schemas/message");

const chatRoomSchema = mongoose.Schema({
  userID: {
    type: String,
    unique : 1,
  },
  lastChat: {
    type: Date,
    default: Date.now,
  },
  userLastVisit: {
      userID : {
        type: String,
        required: false,
      },
      lastVisit : {
        type: Date,
        default: Date.now,
        required: false,
      },
    },
  messages: [messageSchema],
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = { ChatRoom };