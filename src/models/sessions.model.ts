import mongoose, { Schema, model } from "mongoose";
import { Iuser } from "../types/user.types";
import { boolean } from "zod";


const sessionSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User'
  },
    valid: {
      type: Boolean,
      default: true
    },

    userAgent: {
      type: String
    }

});


sessionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Session = model("Session", sessionSchema);

export default Session;
