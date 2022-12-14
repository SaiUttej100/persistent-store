import { NextFunction, Request, Response } from "express";

export declare function get<T>(key: string): T;

export declare function set(key: string, value: any): void;

export declare function getStore(): Map<string, any>;

export declare function middleware(req: Request, res: Response, next: NextFunction): void;
