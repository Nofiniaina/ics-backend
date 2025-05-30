import { Router } from "express";
import { 
    getAllUsers, register, login 
} from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);
router.post("/register", register);
router.post("/login", login);

export default router;