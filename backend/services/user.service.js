import Data from "./../models/user.model";

// Get Data Service
export async function getUserService() {
  // const result = await Data.find({});
  const result = { name: "GET services" };
  return result;
}

// Save Data Service
export async function saveUserService() {
  // const result = await Data.find({});
  const result = { name: "POST services" };
  return result;
}
