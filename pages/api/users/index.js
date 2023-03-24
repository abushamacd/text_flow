const dataControllers = require("./../../../backend/controllers/user.controller");
import DBConnect from "@/backend/utils/dbConnect";
import multer from "multer";
import nc from "next-connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // Upload distinations
      // cb(null, path.join(process.cwd(), "public", "uploads"));
      cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + "-" + file.originalname);
      // cb(null, new Date().getTime());
    },
  }),
});

// app.use("/api", upload.single("image"), nextFunctionHandler);

// export default async function handler(req, res) {
//   await DBConnect();
//   const { method } = req;
//   switch (method) {
//     case "GET":
//       dataControllers.getUser(req, res);
//       break;
//     case "POST":
//       dataControllers.saveUser(req, res);
//       break;
//     case "PUT":
//       res.status(200).json({ name: "PUT" });
//       break;
//     case "DELETE":
//       res.status(200).json({ name: "DELETE" });
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${method} is not allowed `);
//       break;
//   }
// }

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single("image"))
  .get((req, res) => {
    dataControllers.getUser(req, res);
  })
  .post(async (req, res) => {
    await DBConnect();
    await dataControllers.saveUser(req, res);
  });

export default handler;
