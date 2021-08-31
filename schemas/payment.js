const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  receiptID: {
    type: String,
    unique: 1,
  },
  shipStat: { // 배송 상태 0 - 결제확인, 1 - 수선완료, 2 - 배송중 ... => 미정
    type: Number,
  },
  tailorToken: { // 수선업자 User._id의 토큰 => role이 8이면 수선업자
    type: String,
    minLength: 5,
  },
});

module.exports = { paymentSchema };