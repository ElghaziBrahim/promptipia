import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"
//Read
export const GET = async (req, { params }) => {

    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if (!prompt) {
            return new Response(JSON.stringify('prompt not found'), {
                status: 404
            })
        }
        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch", {
            status: 500
        })

    }
}

//Update
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json()
    try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id).populate('creator')
        if (!existingPrompt) {
            return new Response(JSON.stringify('prompt not found'), {
                status: 404
            })
        }
        existingPrompt.prompt = prompt
        existingPrompt.tag = tag
        await existingPrompt.save()
        return new Response(JSON.stringify(existingPrompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to edit prompt", {
            status: 500
        })

    }
}
//Delete
export const DELETE = async (req, { params }) => {

    try {
        await connectToDB()
        await Prompt.findByIdAndDelete(params.id)
        return new Response("Prompt Deleted Seccessfully", {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch", {
            status: 500
        })

    }
}
