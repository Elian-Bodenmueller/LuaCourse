import express from 'express';
import path from 'path';
import { lessons } from '@luacourse/shared';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/lessons', (_req, res) => {
  res.json(lessons);
});

app.use('/', express.static(path.join(__dirname, '../../../dist/apps/frontend')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
