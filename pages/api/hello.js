// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import DBConnect from "@/backend/utils/dbConnect";

export default function handler(req, res) {
  DBConnect();
  res.status(200).json({ name: "John Doe" });
}
