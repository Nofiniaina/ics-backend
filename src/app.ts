import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database';

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

export default app;