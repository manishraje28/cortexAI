import mongoose from "mongoose"
 

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MGDB connected")
    } catch (error) {
        console.log("DB errror")
    }
}

export default connectDb