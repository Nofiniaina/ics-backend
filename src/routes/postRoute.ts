import { Router } from "express";
import { 
    createPost, getAllPosts, deletePost 
} from "../controllers/postController";

const router = Router();

router.get("/getAll", getAllPosts);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);

export default router;