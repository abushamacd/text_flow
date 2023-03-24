import User from "./../models/user.model";

// Get Data Service
export async function getUserService() {
  // const result = await User.find({});
  const result = { name: "GET services" };
  return result;
}

// Save Data Service
export async function saveUserService(req) {
  const user = new User({
    ...req.body,
    image: process.env.DOMAIN + "/uploads/" + req.file.filename,
  });
  const result = await user.save();
  // const result = { body: req.body, file: req.file };
  return result;
}
