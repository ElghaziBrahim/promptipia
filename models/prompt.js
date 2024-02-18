import { Schema, model, models } from "mongoose";

const Prompt = models.Prompt || model("Prompt", new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, "Prompt is Required"]
    },
    tag: {
        type: String,
        required: [true, "Tag is Required"]

    }
}))

export default Prompt