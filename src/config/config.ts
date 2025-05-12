import dotenv from 'dotenv';

dotenv.config();

interface Config { 
    port: number;
    nodeEnv: string;
    mongoURI: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3001,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoURI: process.env.MONGO_URI || '',
}

export default config;