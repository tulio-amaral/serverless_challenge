import express, { json, NextFunction, Request, Response } from 'express'
import serverless from 'serverless-http';

import AppError from './utils/AppError';

const app = express();

app.use(json());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

export const handler = serverless(app);