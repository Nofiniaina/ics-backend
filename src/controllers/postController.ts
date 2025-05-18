import { Response, Request, NextFunction } from "express";
import { Post } from "../models/Post";

export async function createPost(req: Request, res: Response, next: NextFunction){
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
}

export async function getAllPosts(req: Request, res: Response, next: NextFunction){
    try {
        const posts = await Post.find()
            .select("_id user title content createdAt")
            .populate("user", "_id username email avatar");
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted successfully", post });
    } catch (error) {
        next(error);
    }
}