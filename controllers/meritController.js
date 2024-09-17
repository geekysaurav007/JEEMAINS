const { Merit } = require("../models/merit");
const { User } = require("../models/user");

function rankStudents(result) {
  return result.sort((a, b) => {
    if (b.total !== a.total) {
      return b.total - a.total; // Sort by total marks first
    } else if (parseInt(b.physics) !== parseInt(a.physics)) {
      return b.physics - a.physics; // If total is the same, sort by physics marks
    } else {
      return parseInt(b.maths) - parseInt(a.maths); // If both total and physics are the same, sort by maths marks
    }
  });
}

async function createMerit(req, resp) {
  const roll_no = req.params.id;
  const result = await User.findOne({ roll_no });
  console.log(result);
  if (!result) {
    resp.status = 500;
    return resp.json({ message: "no rollno exists... please check your roll",flag:false });
  }
  req.body.id = result._id;
  req.body.total =
    parseInt(req.body.physics) +
    parseInt(req.body.chemistry) +
    parseInt(req.body.maths);
  const response = await Merit(req.body).save();

  return resp.json({ response,flag:true });
}
async function getMyMerit(req, resp) {
  const roll_no = req.params.roll_no;
  const merit = await Merit.findOne({ roll_no }).populate({
    path: "id",
  });
  if (!merit) {
    resp.status = 500;
    return resp.json({ merit, message: "no merit exists", flag: false });
  }
  return resp.json({ merit ,flag:true});
}
async function getAllMerit(req, resp) {
  let result = await Merit.find().populate({
    path: "id",
  });;
  result = rankStudents(result);
  return resp.json(result);
}

// 2024Gen563277296
module.exports = { createMerit, getMyMerit, getAllMerit };
