import mongoose, { mongo } from "mongoose";
let isConnected = false
export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("Mongods Is Already Connecter")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "promptipia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log("Mongodb Connected")
    } catch (error) {
        console.log(error)
    }

}