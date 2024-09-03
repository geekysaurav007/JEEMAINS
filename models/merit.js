const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const marksSchema = new Schema(
  {
    physics: { type: String },
    chemistry: { type: String },
    maths: { type: String },
    roll_no: { type: String },
    id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    total: { type: Number, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const Merit = mongoose.model("merit", marksSchema);
module.exports = { Merit };
