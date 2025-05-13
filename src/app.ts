import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database';
import { errorHandler } from './middlewares/errorHandler';
import userRoute from './routes/userRoute';
import postRoute from './routes/postRoute';

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

//routes
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute); 

//middlewares
app.use(errorHandler);

export default app;