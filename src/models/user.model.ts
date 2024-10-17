import { Schema, model } from "mongoose";
import { Iuser } from "../types/user.types";

// Define the user schema
const userSchema = new Schema<Iuser>(
  {
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true } 
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password
  }
});

const User = model<Iuser>("User", userSchema);

export default User;
