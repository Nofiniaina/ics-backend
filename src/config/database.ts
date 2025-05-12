import mongoose from "mongoose";
import config from "./config";

export function connectDatabase() {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        })
}