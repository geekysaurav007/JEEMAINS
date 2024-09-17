const { User } = require("../models/user");
const passHash = require("password-hash");
const jwt = require("jsonwebtoken");
const generateUniqueId = require('generate-unique-id');

async function loginUser(req, resp, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    // password check
    ispasswordMatched = passHash.verify(password, user.password);
    if (ispasswordMatched) {
      // creating payload------->>>>
      const payload = {
        _id: user._id,
        isAdmin: user.isAdmin,
        email: user.email,
        roll_no:user.roll_no
      };
      // creating jwt token------->>>>>>
      const token = jwt.sign(payload, "JEEMAINS");
      return resp.json({ message: "login success", token: token });
    }
  }
  resp.status(400);
  return resp.json({ message: "LOGIN ERROR....invalid email or password" });
}

async function saveUsers(req, resp, next) {
  const userData = req.body;
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    userData.password = passHash.generate(userData.password);
    const id2 = generateUniqueId({
      length: 10,
      useLetters: false
    });
    userData.roll_no=new Date().getFullYear()+userData.category+id2;
    const user = await new User(userData).save();
    return resp.json({flag:true,user});
  } else {
    resp.status(400)
    return resp.json({message:"email already exists"})
  }
}
async function getAllUser(req, resp, next) {
  const result=await User.find()
  return resp.json(result);
}
module.exports = { loginUser, saveUsers,getAllUser };
