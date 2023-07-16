import express, { NextFunction, Request, Response } from 'express';
import { Middleware } from './middleware';

const app = express();
const middleware = new Middleware(app);
middleware.setup();
/**
 * App Configuration
 */

// Serves images
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'API is running on /api' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
