import colors from "colors";
import { set, connect as _connect } from "mongoose";
set("strictQuery", false);

const DBConnect = async () => {
  const connect = await _connect(process.env.DB_URI)
    .then(() => {
      console.log(`==== DB Connection is succesfully ====`.green.bold.italic);
    })
    .catch(() => {
      console.log(`==== Database Connection Error ====`.red.bold.italic);
    });
  return connect;
};

export default DBConnect;
