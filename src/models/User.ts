import mongoose, { Schema } from "mongoose";

export interface IUser {
    username: string;
    password: string;
    email: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;   
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

export const User = mongoose.model<IUser>("User", UserSchema);

