import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next';

const allowedOrigins = ['http://localhost:3000', 'https://drop-the-needle.vercel.app']

const cors = Cors({
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'), false);
        }
    }
});

export const runMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise((resolve, reject) => {
        cors(req, res, (result) => {
        if (result instanceof Error) {
            return reject(result);
        }
        return resolve(result);
        });
    });
}