import { Schema, model, models } from "mongoose";

// Schema Design
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Model Create
const User = models.users || model("users", userSchema);
export default User;
