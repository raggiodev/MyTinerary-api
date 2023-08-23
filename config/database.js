import mongoose from "mongoose";

mongoose.connect(process.env['DATABASE_URL'])
.then(()=>{
    console.log("Database connected successfully!");
})
.catch(()=>{
    console.log("Database connection failed...");
})