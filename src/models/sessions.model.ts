import { Schema, model } from "mongoose";
import { Iuser } from "../types/user.types";

export interface Isession {
    email: string, 
}
const sessionSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User'
  },
});

sessionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password
  }
});

const Session = model("Session", sessionSchema);

export default Session;
