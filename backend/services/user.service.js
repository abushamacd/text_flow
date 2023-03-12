import Data from "./../models/user.model";

// Get Data Service
export async function getUserService() {
  // const result = await Data.find({});
  const result = { name: "GET services" };
  return result;
}
