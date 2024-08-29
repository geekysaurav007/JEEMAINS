const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://ranjansaurav07:12345@cluster0.t9rwt.mongodb.net/JEEMAINS";

async function createConnection(params) {
  const connection = await mongoose.connect(DB_URL, {});
  if (connection) {
    console.log("Connected");
  }
}
module.exports = createConnection;
