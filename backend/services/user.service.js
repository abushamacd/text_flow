import User from "./../models/user.model";
const bcrypt = require("bcrypt");

// Get Data Service
export async function getUserService() {
  // const result = await User.find({});
  const result = { name: "GET services" };
  return result;
}

// Save Data Service
export async function saveUserService(req) {
  const existingUser = await User.find({
    email: req.body.email,
  });

  if (existingUser[0]?.email) {
    return { message: `Email already use` };
  }

  if (!existingUser[0]?.email) {
    const encryptPassword = await bcrypt.hash(req.body.password, 10);
    console.log(encryptPassword);
    const user = new User({
      ...req.body,
      password: encryptPassword,
      image: process.env.DOMAIN + "/uploads/" + req.file.filename,
    });
    console.log(user);
    const result = await user.save();
    return result;
  }
}
