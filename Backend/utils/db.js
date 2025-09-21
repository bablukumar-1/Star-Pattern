import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

function db() {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log(' data base is connect success fully !')
        })
        .catch((error)=>{
            console.log(`database connection is failed`, error)
        })
}

export default db; 