import mongoose from "mongoose";
// connecting mongo url
export default async () => {
    return mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
    });
}