const dataControllers = require("./../../../backend/controllers/user.controller");
import DBConnect from "@/backend/utils/dbConnect";

export default function handler(req, res) {
  DBConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      dataControllers.getUser(req, res);
      break;
    case "POST":
      res.status(200).json({ name: "POST" });
      break;
    case "PUT":
      res.status(200).json({ name: "PUT" });
      break;
    case "DELETE":
      res.status(200).json({ name: "DELETE" });
      break;
    default:
      //   res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed `);
      break;
  }
}
