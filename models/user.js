import { Schema, model, models } from "mongoose";

const User = models.User || model("User", new Schema({
    email: {
        type: String,
        unique: [true, "Email Already Exists"],
        require: [true, "EMAIL Required"]
    },
    username: {
        type: String,
        require: [true, "Username Required"],
    },
    image: { type: String }
}))

export default User