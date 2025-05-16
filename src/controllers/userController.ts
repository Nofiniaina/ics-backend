import { Response, Request, NextFunction } from "express";
import { User } from "../models/User";
import config from "../config/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req: Request, res: Response, next: NextFunction){
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword,
            email,
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

export async function login(req: Request, res: Response, next: NextFunction){
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if(user){
            let validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword)
                res.status(401).json({ message: "Invalid password" });

            const token = jwt.sign(
                { userId: user._id, username: user.username },
                config.jwtSecret,
                { expiresIn: "1h"}
            );

            const dataUser = {
                _id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
            }

            res.status(200).json({ message: "Successfullu logged", token: token, user: dataUser });
        } else {
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        next(error);
    }
}

export async function getAllUsers(req: Request, res: Response, next: NextFunction){
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}