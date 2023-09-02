import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import path from 'path';
import { z } from 'zod';

const app = express();
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

const querySchema = z.object({
  q: z.string(),
  num: z.string().refine(
    str => !isNaN(parseFloat(str)),
    "Must be a valid number"
  ).transform(str => parseFloat(str))
});

// ルートエンドポイント
app.get('/', (req: Request, res: Response) => {
  res.render('layout', { title: 'HOME', content: 'index'});
});

// /health エンドポイント
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.get('/greet', (req: Request, res: Response) => {
  console.log(req.query);
  const parsedQuery = querySchema.safeParse(req.query);
  const query = parsedQuery.success ? parsedQuery.data.q : 'Express';
  const num = parsedQuery.success ? parsedQuery.data.num : 1;

  // const parseNumberQuery = numberSchema.safeParse(req.)
  res.render('layout', { title: 'Greet', content: 'greet', query: query.repeat(num) });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
