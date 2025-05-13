import { Response, Request, NextFunction } from "express";

export interface ErrorResponse extends Error {
    status?: number;
}

export const errorHandler = (
    error: ErrorResponse,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(error);
    res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
    });
} 