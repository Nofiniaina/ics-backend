import dotenv from 'dotenv';

dotenv.config();

interface Config { 
    port: number;
    nodeEnv: string;
    mongoURI: string;
    jwtSecret: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3001,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoURI: process.env.MONGO_URI || '',
    jwtSecret: process.env.JWT_SECRET || ''
}

export default config;